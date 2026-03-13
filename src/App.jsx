import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
    Search, Sparkles, XCircle, Loader2, FileText, PenLine,
    Building2, Briefcase, DollarSign, Clock, CheckCircle,
    SlidersHorizontal, Database, LogIn, Edit3, Trash2
} from 'lucide-react';

// Firebase
import {
    db, auth, appId, COLLECTIONS,
    collection, addDoc, query, onSnapshot, orderBy, getDocs,
    serverTimestamp, runTransaction, doc, updateDoc, deleteDoc,
    signInAnonymously, onAuthStateChanged,
} from './lib/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { seedDatabase } from './lib/seed';

// Data (fallback only)
import { generateCompanies, generateMockData } from './data/mockData';

// Components
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import CompanyDetailView from './components/CompanyDetailView';
import CompanyAutocomplete from './components/CompanyAutocomplete';
import InteractionSection from './components/InteractionSection';

import { NoteCard, Badge } from './components/ui';
import { CreateCompanyModal, LoginModal, SettingsModal } from './components/modals';

const REFRESH_INTERVAL = 30 * 60 * 1000; // 30 min

export default function App() {
    // State
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [entries, setEntries] = useState([]);
    const [filteredEntries, setFilteredEntries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

    // Navigation State
    const [activeView, setActiveView] = useState('home'); // 'home' | 'company-detail'
    const [activeTab, setActiveTab] = useState('home');   // 'home' | 'settings'
    const [viewingCompany, setViewingCompany] = useState(null);

    // Modals & Navigation
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [showCreateCompanyModal, setShowCreateCompanyModal] = useState(false);
    const [editingEntry, setEditingEntry] = useState(null);

    // Data
    const [companies, setCompanies] = useState([]);
    const [newCompanyInitialName, setNewCompanyInitialName] = useState('');
    const [seeding, setSeeding] = useState(false);

    // Filter State
    const [filters, setFilters] = useState({
        industry: 'all',
        selectedCompany: null,
        title: '',
        minSalary: '',
        minExperience: ''
    });

    // Auth / Role State
    const [currentRole, setCurrentRole] = useState(() => {
        return localStorage.getItem('job-inn-role') || 'guest';
    });
    const [appSettings, setAppSettings] = useState({ useMockData: false });

    // Form State
    const [formData, setFormData] = useState({
        company: '', title: '', industry: '軟體/網路', department: '', annual_package: '', salary: '',
        currency: 'TWD', period: '月薪', experience: '', location: '台北市', content: ''
    });
    const [submitLoading, setSubmitLoading] = useState(false);
    const refreshTimerRef = useRef(null);

    // --- Auth ---
    useEffect(() => {
        if (!auth) {
            console.warn('Firebase auth not available');
            setLoading(false);
            return;
        }
        return onAuthStateChanged(auth, (u) => {
            setUser(u);
            if (!u) {
                setCurrentRole('guest');
                localStorage.setItem('job-inn-role', 'guest');
            }
        });
    }, []);

    // --- Login / Logout ---
    const handleLogin = useCallback(() => {
        setShowLoginModal(true);
    }, []);

    const handleLoginAs = useCallback(async (role) => {
        try {
            if (!user) {
                await signInAnonymously(auth);
            }
            setCurrentRole(role);
            localStorage.setItem('job-inn-role', role);
            setShowLoginModal(false);
            showNotification(`已以${role === 'admin' ? '審核員' : '用戶'}身份登入`, 'success');
        } catch (e) {
            console.error('Login error:', e);
            showNotification('登入失敗', 'error');
        }
    }, [user]);

    const handleLogout = useCallback(async () => {
        try {
            if (auth) {
                await signOut(auth);
            }
            setCurrentRole('guest');
            localStorage.setItem('job-inn-role', 'guest');
            showNotification('已登出', 'success');
        } catch (e) {
            console.error('Logout error:', e);
        }
    }, []);

    // --- Fetch Companies ---
    const fetchCompanies = useCallback(async () => {
        if (!db) return;
        try {
            const snapshot = await getDocs(query(collection(db, COLLECTIONS.companies), orderBy('name')));
            const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setCompanies(data);
        } catch (e) {
            console.error('Fetch companies error:', e);
        }
    }, []);

    // --- Fetch Salary Entries ---
    const fetchEntries = useCallback(async () => {
        if (!db) return;
        setLoading(true);
        try {
            const snapshot = await getDocs(query(collection(db, COLLECTIONS.salaryEntries), orderBy('createdAt', 'desc')));
            const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setEntries(data);
        } catch (e) {
            console.error('Fetch entries error:', e);
        }
        setLoading(false);
    }, []);

    // --- Data Loading + 30-min auto-refresh ---
    useEffect(() => {
        if (appSettings.useMockData) {
            setCompanies(generateCompanies());
            setEntries(generateMockData(50));
            setLoading(false);
            return;
        }

        fetchCompanies();
        fetchEntries();

        refreshTimerRef.current = setInterval(() => {
            console.log('🔄 Auto-refreshing data (30 min)...');
            fetchCompanies();
            fetchEntries();
        }, REFRESH_INTERVAL);

        return () => {
            if (refreshTimerRef.current) clearInterval(refreshTimerRef.current);
        };
    }, [appSettings.useMockData, fetchCompanies, fetchEntries]);

    // --- Filtering Logic ---
    useEffect(() => {
        let result = [...entries];

        if (currentRole === 'guest') {
            result = result.filter(item => item.status === 'approved');
        }
        if (searchTerm) {
            const lower = searchTerm.toLowerCase();
            result = result.filter(e =>
                e.company?.toLowerCase().includes(lower) ||
                e.title?.toLowerCase().includes(lower) ||
                (e.content && e.content.toLowerCase().includes(lower))
            );
        }
        if (filters.industry !== 'all') {
            result = result.filter(e => e.industry === filters.industry);
        }
        if (filters.selectedCompany) {
            result = result.filter(e => e.company === filters.selectedCompany);
        }
        if (filters.title) {
            result = result.filter(e => e.title?.toLowerCase().includes(filters.title.toLowerCase()));
        }
        if (filters.minSalary) {
            result = result.filter(e => parseInt(e.salary || 0) >= parseInt(filters.minSalary));
        }
        if (filters.minExperience) {
            result = result.filter(e => parseFloat(e.experience || 0) >= parseFloat(filters.minExperience));
        }
        setFilteredEntries(result);
    }, [entries, searchTerm, filters, currentRole]);

    // --- Navigation ---
    const handleCompanyClick = useCallback((companyName) => {
        const company = companies.find(c => c.name === companyName) || { id: companyName.toLowerCase().replace(/\s+/g, '-'), name: companyName, industry: '未知', aliases: [], stats: { median: 0, avg: 0, count: 0, year: 112 } };
        setViewingCompany(company);
        setActiveView('company-detail');
        setActiveTab('home');
    }, [companies]);

    const handleBackToHome = useCallback(() => {
        setViewingCompany(null);
        setActiveView('home');
    }, []);

    // --- Notifications ---
    const showNotification = useCallback((message, type) => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    }, []);

    const requireLogin = useCallback(() => {
        if (currentRole === 'guest') { setShowLoginModal(true); return true; }
        return false;
    }, [currentRole]);

    // --- API ---
    const api = useMemo(() => ({
        add: async (data) => {
            const uid = user?.uid || 'anonymous';
            const newEntry = {
                ...data,
                createdAt: serverTimestamp(),
                interactions: [],
                authorId: uid,
                status: 'approved',
            };
            await addDoc(collection(db, COLLECTIONS.salaryEntries), newEntry);
            fetchEntries();
        },

        update: async (id, data) => {
            const docRef = doc(db, COLLECTIONS.salaryEntries, id);
            await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
            setEntries(prev => prev.map(e => e.id === id ? { ...e, ...data } : e));
        },

        remove: async (id) => {
            const docRef = doc(db, COLLECTIONS.salaryEntries, id);
            await deleteDoc(docRef);
            setEntries(prev => prev.filter(e => e.id !== id));
        },

        addCompany: async (companyData) => {
            const docRef = await addDoc(collection(db, COLLECTIONS.companies), {
                ...companyData,
                createdAt: serverTimestamp(),
            });
            setCompanies(prev => [...prev, { id: docRef.id, ...companyData }]);
        },

        interact: async (id, actionType, comment) => {
            const uid = user?.uid || 'anonymous';
            if (!uid) return;

            const newInteraction = actionType ? {
                userId: uid,
                type: actionType,
                comment: comment,
                createdAt: new Date().toISOString()
            } : null;

            const docRef = doc(db, COLLECTIONS.salaryEntries, id);
            try {
                await runTransaction(db, async (transaction) => {
                    const sfDoc = await transaction.get(docRef);
                    if (!sfDoc.exists()) return;

                    const entry = sfDoc.data();
                    let interactions = [...(entry.interactions || [])];
                    const existingIndex = interactions.findIndex(i => i.userId === uid);

                    if (newInteraction === null) {
                        if (existingIndex > -1) interactions.splice(existingIndex, 1);
                    } else {
                        if (existingIndex > -1) {
                            interactions[existingIndex] = newInteraction;
                        } else {
                            interactions.push(newInteraction);
                        }
                    }
                    transaction.update(docRef, { interactions });
                });
                setEntries(prev => prev.map(entry => {
                    if (entry.id !== id) return entry;
                    let interactions = [...(entry.interactions || [])];
                    const existingIndex = interactions.findIndex(i => i.userId === uid);
                    if (newInteraction === null) {
                        if (existingIndex > -1) interactions.splice(existingIndex, 1);
                    } else {
                        if (existingIndex > -1) interactions[existingIndex] = newInteraction;
                        else interactions.push(newInteraction);
                    }
                    return { ...entry, interactions };
                }));
            } catch (e) {
                console.error('Interaction Failed', e);
                showNotification('操作失敗，請重試', 'error');
            }
        }
    }), [user, showNotification, fetchEntries]);

    // --- Company entries for detail view ---
    const companyEntries = useMemo(() => {
        if (!viewingCompany) return [];
        return entries.filter(e => e.company === viewingCompany.name);
    }, [entries, viewingCompany]);

    // --- Handlers ---
    const handleCompanyCreate = useCallback(async (newCompanyData) => {
        await api.addCompany(newCompanyData);
        setFormData(p => ({ ...p, company: newCompanyData.name, industry: newCompanyData.industry }));
        setShowCreateCompanyModal(false);
        showNotification(`已建立公司：${newCompanyData.name}`, 'success');
    }, [api, showNotification]);

    const handleEditEntry = useCallback((entry) => {
        setEditingEntry(entry);
        setFormData({
            company: entry.company || '',
            title: entry.title || '',
            industry: entry.industry || '軟體/網路',
            department: entry.department || '',
            annual_package: entry.annual_package || '',
            salary: entry.salary || '',
            currency: entry.currency || 'TWD',
            period: entry.period || '月薪',
            experience: entry.experience || '',
            location: entry.location || '台北市',
            content: entry.content || ''
        });
        setShowSubmitModal(true);
    }, []);

    const handleDeleteEntry = useCallback(async (id) => {
        if (!window.confirm('確定要刪除這篇筆記嗎？此操作無法還原。')) return;
        try {
            await api.remove(id);
            showNotification('筆記已刪除', 'success');
        } catch (e) {
            console.error('Delete error:', e);
            showNotification('刪除失敗', 'error');
        }
    }, [api, showNotification]);

    const handleSubmit = useCallback(async (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setSubmitLoading(true);
        try {
            if (editingEntry) {
                await api.update(editingEntry.id, formData);
                showNotification('更新成功！', 'success');
            } else {
                await api.add(formData);
                showNotification('發布成功！', 'success');
            }
            setFormData({ company: '', title: '', industry: '軟體/網路', department: '', annual_package: '', salary: '', currency: 'TWD', period: '月薪', experience: '', location: '台北市', content: '' });
            setEditingEntry(null);
            setShowSubmitModal(true);
            setTimeout(() => setShowSubmitModal(false), 50); // small delay to close
        } catch (err) {
            console.error('Submit error:', err);
            showNotification('送出失敗', 'error');
        }
        setSubmitLoading(false);
    }, [api, formData, editingEntry, showNotification]);

    const handleSeedDatabase = useCallback(async () => {
        setSeeding(true);
        try {
            const result = await seedDatabase();
            if (result) {
                showNotification('種子資料已寫入 🌱', 'success');
                fetchCompanies();
                fetchEntries();
            } else {
                showNotification('資料庫已有資料，跳過寫入', 'success');
            }
        } catch (e) {
            console.error('Seed error:', e);
            showNotification('寫入失敗: ' + e.message, 'error');
        }
        setSeeding(false);
    }, [showNotification, fetchCompanies, fetchEntries]);

    const resetFilters = useCallback(() => {
        setFilters({ industry: 'all', selectedCompany: null, title: '', minSalary: '', minExperience: '' });
    }, []);

    const currentUserId = user?.uid || 'anonymous';

    const userEntries = useMemo(() => {
        const uid = user?.uid;
        if (!uid) return [];
        return entries.filter(e => e.authorId === uid);
    }, [entries, user]);

    // --- Determine which main content to render ---
    const renderMainContent = () => {
        // Company detail view (drill-down from home)
        if (activeView === 'company-detail' && viewingCompany) {
            return (
                <CompanyDetailView
                    company={viewingCompany}
                    onBack={handleBackToHome}
                    role={currentRole}
                    currentUserId={currentUserId}
                    companyEntries={companyEntries}
                    onInteract={api.interact}
                    onDeleteInteraction={(id) => api.interact(id, null, null)}
                    onLoginRequire={() => setShowLoginModal(true)}
                />
            );
        }



        // Home tab — notes feed
        return (
            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar pb-24 md:pb-4">
                <div className="max-w-3xl mx-auto space-y-6">

                    {/* Empty state — seed prompt */}
                    {!loading && entries.length === 0 && !appSettings.useMockData && (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-400">
                                <Database size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-700 mb-2">資料庫是空的</h3>
                            <p className="text-sm text-slate-400 mb-6">首次使用？點擊下方按鈕寫入初始資料</p>
                            <button
                                onClick={handleSeedDatabase}
                                disabled={seeding}
                                className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all disabled:opacity-50"
                            >
                                {seeding ? <Loader2 className="animate-spin mx-auto" size={20} /> : '🌱 寫入種子資料'}
                            </button>
                        </div>
                    )}

                    {/* Guest Banner */}
                    {currentRole === 'guest' && entries.length > 0 && (
                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center gap-3">
                            <LogIn size={20} className="text-indigo-500 shrink-0" />
                            <div className="flex-1">
                                <p className="text-sm text-indigo-800 font-medium">您目前以訪客身份瀏覽</p>
                                <p className="text-xs text-indigo-500">登入後可查看完整薪資資訊、發文和互動。</p>
                            </div>
                            <button
                                onClick={handleLogin}
                                className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-colors shrink-0"
                            >
                                登入
                            </button>
                        </div>
                    )}

                    {/* Search Bar */}
                    {(entries.length > 0 || appSettings.useMockData) && (
                        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md py-2 -mx-2 px-2 md:static md:bg-transparent md:p-0">
                            <div className="flex gap-2 mb-2">
                                <div className="relative group flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                                    <input
                                        className="w-full pl-10 pr-4 py-3 md:py-4 bg-slate-100 md:bg-white border-none md:border md:border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all shadow-sm text-base"
                                        placeholder={filters.selectedCompany ? `搜尋 ${filters.selectedCompany} 的內容...` : "搜尋公司、職稱或關鍵字..."}
                                        value={searchTerm}
                                        onChange={e => setSearchTerm(e.target.value)}
                                    />
                                    {filters.selectedCompany && (
                                        <button onClick={() => setFilters({ ...filters, selectedCompany: null })} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full">
                                            <XCircle size={16} className="text-slate-400" />
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                                    className={`px-4 rounded-xl border transition-all flex items-center gap-2 font-medium ${showAdvancedFilters ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                >
                                    <SlidersHorizontal size={18} />
                                    <span className="hidden md:inline">篩選</span>
                                </button>
                            </div>

                            {/* Advanced Filters */}
                            {showAdvancedFilters && (
                                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm animate-in slide-in-from-top-2 fade-in">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><Building2 size={12} /> 公司</label>
                                            <select className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" value={filters.selectedCompany || ''} onChange={e => setFilters({ ...filters, selectedCompany: e.target.value || null })}>
                                                <option value="">全部公司</option>
                                                {companies.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><Briefcase size={12} /> 職稱關鍵字</label>
                                            <input className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" placeholder="例如: 前端" value={filters.title} onChange={e => setFilters({ ...filters, title: e.target.value })} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><DollarSign size={12} /> 最低月薪</label>
                                            <input type="number" className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" placeholder="例如: 40000" value={filters.minSalary} onChange={e => setFilters({ ...filters, minSalary: e.target.value })} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1"><Clock size={12} /> 最低年資 (年)</label>
                                            <input type="number" className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" placeholder="例如: 3" value={filters.minExperience} onChange={e => setFilters({ ...filters, minExperience: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-slate-100 flex justify-end">
                                        <button onClick={resetFilters} className="text-xs text-slate-400 hover:text-rose-500 font-medium">重置所有條件</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* No results */}
                    {filteredEntries.length === 0 && !loading && entries.length > 0 && (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300"><FileText size={32} /></div>
                            <h3 className="text-slate-500 font-medium">沒有找到相關筆記</h3>
                            <p className="text-sm text-slate-400 mt-1">試試看其他關鍵字或切換來源</p>
                            <button onClick={resetFilters} className="mt-4 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-200">清除篩選</button>
                        </div>
                    )}

                    {/* Cards */}
                    <div className="grid gap-4">
                        {filteredEntries.map(entry => (
                            <NoteCard key={entry.id} onClick={() => handleCompanyClick(entry.company)} className="p-5 md:p-6 group">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg group-hover:scale-110 transition-transform">
                                            {entry.company?.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{entry.company}</h3>
                                            <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                                                <span>{entry.title}</span><span>•</span><span>{entry.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5">
                                        {entry.authorId === currentUserId && currentUserId !== 'anonymous' && (
                                            <div className="flex items-center gap-1 bg-white border border-slate-100 shadow-sm rounded-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={(e) => { e.stopPropagation(); handleEditEntry(entry); }} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors tooltip" title="編輯筆記"><Edit3 size={14} /></button>
                                                <button onClick={(e) => { e.stopPropagation(); handleDeleteEntry(entry.id); }} className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-md transition-colors tooltip" title="刪除筆記"><Trash2 size={14} /></button>
                                            </div>
                                        )}
                                        <div className="text-right mt-1">
                                            <div className="text-xl font-bold text-emerald-600 font-mono tracking-tight leading-none">
                                                {currentRole === 'guest' ? '****' : parseInt(entry.salary).toLocaleString()}
                                                <span className="text-xs text-slate-400 font-sans font-normal ml-1">/月</span>
                                            </div>
                                            <div className="text-xs text-slate-400 mt-1">年資 {entry.experience} 年</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative pl-4 border-l-2 border-indigo-100 py-1 my-4">
                                    <p className="text-slate-700 leading-relaxed text-sm md:text-base line-clamp-2">{entry.content}</p>
                                </div>

                                <div className="flex items-center gap-2 mt-4">
                                    <Badge color="gray">{entry.industry}</Badge>
                                    <Badge color="blue">{entry.annual_package}</Badge>
                                </div>

                                <InteractionSection
                                    entry={entry}
                                    currentUserId={currentUserId}
                                    onInteract={api.interact}
                                    onDelete={(id) => api.interact(id, null, null)}
                                    onLoginRequire={() => setShowLoginModal(true)}
                                />
                            </NoteCard>
                        ))}
                    </div>

                    {loading && (
                        <div className="flex justify-center py-10">
                            <Loader2 className="animate-spin text-indigo-500" />
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="flex h-screen bg-white text-slate-900 font-sans overflow-hidden">
            <Sidebar
                companies={companies}
                filters={filters}
                setFilters={setFilters}
                activeView={activeView}
                activeTab={activeTab}
                viewingCompany={viewingCompany}
                currentRole={currentRole}
                user={user}
                onCompanyClick={handleCompanyClick}
                onBackToHome={handleBackToHome}
                requireLogin={requireLogin}
                onShowSubmitModal={() => setShowSubmitModal(true)}
                onShowSettingsModal={() => setShowSettingsModal(true)}
                onLogin={handleLogin}
                onLogout={handleLogout}
                onSetActiveTab={setActiveTab}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full relative">
                {/* Mobile Header */}
                <div className="md:hidden h-14 border-b border-slate-100 flex items-center justify-between px-4 bg-white z-20">
                    <div className="flex items-center gap-2 font-bold text-slate-800">
                        <Sparkles size={18} className="text-indigo-600" /> Salary Notebook
                    </div>
                    <div className="flex items-center gap-2">
                        {currentRole === 'guest' ? (
                            <button onClick={handleLogin} className="text-xs px-3 py-1 bg-indigo-600 text-white rounded-full font-medium">登入</button>
                        ) : (
                            <div className="flex items-center gap-1.5">
                                <div className={`w-2 h-2 rounded-full ${currentRole === 'admin' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                                <span className="text-xs text-slate-500">{currentRole === 'admin' ? '審核員' : '用戶'}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content */}
                {renderMainContent()}

                <BottomNav
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    filters={filters}
                    setFilters={setFilters}
                    onBackToHome={handleBackToHome}
                    requireLogin={requireLogin}
                    onShowSubmitModal={() => setShowSubmitModal(true)}
                />
            </div>

            {/* Submit Modal */}
            {showSubmitModal && (
                <div className="fixed inset-0 z-50 bg-white md:bg-black/50 md:backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4 animate-in slide-in-from-bottom-10 fade-in">
                    <div className="bg-white w-full md:max-w-lg md:rounded-2xl h-[95vh] md:h-auto flex flex-col shadow-2xl">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-lg font-bold flex items-center gap-2"><PenLine size={18} /> {editingEntry ? '編輯筆記' : '新增筆記'}</h2>
                            <button onClick={() => { setShowSubmitModal(false); setEditingEntry(null); setFormData({ company: '', title: '', industry: '軟體/網路', department: '', annual_package: '', salary: '', currency: 'TWD', period: '月薪', experience: '', location: '台北市', content: '' }); }} className="p-2 hover:bg-slate-100 rounded-full"><XCircle size={20} className="text-slate-400" /></button>
                        </div>
                        <div className="p-6 overflow-y-auto flex-1">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Company</label>
                                    <CompanyAutocomplete value={formData.company} onChange={(val) => setFormData({ ...formData, company: val })} onSelect={(comp) => setFormData({ ...formData, company: comp.name, industry: comp.industry })} companies={companies} onCreateNew={(name) => { setNewCompanyInitialName(name); setShowCreateCompanyModal(true); }} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Title</label>
                                        <input required className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="例如: 前端工程師" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Years of Exp</label>
                                        <input required className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500" value={formData.experience} onChange={e => setFormData({ ...formData, experience: e.target.value })} placeholder="3.5" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Monthly Pay</label>
                                        <input required type="number" className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500" value={formData.salary} onChange={e => setFormData({ ...formData, salary: e.target.value })} placeholder="45000" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Annual Package</label>
                                        <input required className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500" value={formData.annual_package} onChange={e => setFormData({ ...formData, annual_package: e.target.value })} placeholder="例如: 100萬" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Location</label>
                                    <select className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })}>
                                        <option>台北市</option><option>新北市</option><option>新竹縣市</option><option>台中市</option><option>高雄市</option><option>遠端 (Remote)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase">Notes / Review</label>
                                    <textarea className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none" placeholder="分享一些工作心得、面試過程或公司文化..." value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} />
                                </div>
                            </form>
                        </div>
                        <div className="p-4 border-t border-slate-100 bg-slate-50 md:rounded-b-2xl flex gap-3">
                            <button onClick={() => { setShowSubmitModal(false); setEditingEntry(null); setFormData({ company: '', title: '', industry: '軟體/網路', department: '', annual_package: '', salary: '', currency: 'TWD', period: '月薪', experience: '', location: '台北市', content: '' }); }} className="flex-1 py-3 text-slate-600 font-bold hover:bg-slate-200 rounded-xl transition-colors">取消</button>
                            <button onClick={handleSubmit} disabled={submitLoading} className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all disabled:opacity-50">
                                {submitLoading ? <Loader2 className="animate-spin mx-auto" /> : (editingEntry ? '儲存變更' : '確認發布')}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showSettingsModal && (
                <SettingsModal
                    onClose={() => setShowSettingsModal(false)}
                    appSettings={appSettings}
                    setAppSettings={setAppSettings}
                    appId={appId}
                    userEntries={userEntries}
                    onEditEntry={handleEditEntry}
                    onDeleteEntry={handleDeleteEntry}
                />
            )}
            {showCreateCompanyModal && <CreateCompanyModal initialName={newCompanyInitialName} onClose={() => setShowCreateCompanyModal(false)} onSubmit={handleCompanyCreate} />}
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLoginAs={handleLoginAs} />}

            {/* Toast */}
            {showToast.show && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-xl z-[100] animate-in fade-in slide-in-from-top-5 flex items-center gap-2">
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span className="text-sm font-medium">{showToast.message}</span>
                </div>
            )}
        </div>
    );
}
