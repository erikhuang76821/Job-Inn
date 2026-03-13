import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
    ArrowLeft, Building2, Landmark, Edit3, Save,
    TrendingUp, BarChart3, Users, Briefcase, AlertTriangle,
    ArrowUpDown, Filter, Clock, ChevronDown, Loader2,
    Reply, X, Send
} from 'lucide-react';
import {
    db, COLLECTIONS,
    collection, addDoc, query, onSnapshot, orderBy, serverTimestamp,
    doc, updateDoc,
} from '../lib/firebase';
import InteractionSection from './InteractionSection';
import { Badge } from './ui';

const CompanyDetailView = ({ company, onBack, role, currentUserId, companyEntries = [], onInteract, onDeleteInteraction, onLoginRequire }) => {
    const [activeTab, setActiveTab] = useState('overview');

    // Stats Editing State
    const [isEditingStats, setIsEditingStats] = useState(false);
    const [stats, setStats] = useState(company.stats || { median: 0, avg: 0, count: 0, year: 112 });

    // Notes sorting & filtering
    const [sortOrder, setSortOrder] = useState('desc');
    const [titleFilter, setTitleFilter] = useState('all');
    const [showTitleDropdown, setShowTitleDropdown] = useState(false);

    // Discussion state
    const [messages, setMessages] = useState([]);
    const [loadingMessages, setLoadingMessages] = useState(true);
    const [newComment, setNewComment] = useState('');
    const [commentType, setCommentType] = useState('推');
    const [replyTo, setReplyTo] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(null);
    const messagesEndRef = useRef(null);
    const chatInputRef = useRef(null);

    // Extract unique titles from entries
    const uniqueTitles = useMemo(() => {
        const titles = [...new Set(companyEntries.map(e => e.title).filter(Boolean))];
        return titles.sort();
    }, [companyEntries]);

    // Sorted & filtered entries
    const displayEntries = useMemo(() => {
        let result = [...companyEntries];
        if (titleFilter !== 'all') {
            result = result.filter(e => e.title === titleFilter);
        }
        result.sort((a, b) => {
            const aTime = a.createdAt?.seconds || 0;
            const bTime = b.createdAt?.seconds || 0;
            return sortOrder === 'desc' ? bTime - aTime : aTime - bTime;
        });
        return result;
    }, [companyEntries, sortOrder, titleFilter]);

    // --- Real-time Discussion Subscription ---
    useEffect(() => {
        if (!company?.id) return;

        setLoadingMessages(true);
        const messagesRef = collection(db, COLLECTIONS.discussions, company.id, COLLECTIONS.messages);
        const q = query(messagesRef, orderBy('createdAt', 'asc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(docSnap => ({
                id: docSnap.id,
                ...docSnap.data(),
                time: docSnap.data().createdAt
                    ? formatTime(docSnap.data().createdAt)
                    : '剛剛'
            }));
            setMessages(msgs);
            setLoadingMessages(false);
            setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
        }, (error) => {
            console.error('Discussion subscription error:', error);
            setLoadingMessages(false);
        });

        return () => unsubscribe();
    }, [company?.id]);

    const formatTime = (timestamp) => {
        if (!timestamp?.seconds) return '剛剛';
        const date = new Date(timestamp.seconds * 1000);
        const now = new Date();
        const diff = (now - date) / 1000;
        if (diff < 60) return '剛剛';
        if (diff < 3600) return `${Math.floor(diff / 60)} 分鐘前`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} 小時前`;
        return `${date.getMonth() + 1}/${date.getDate()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    };

    const handlePostComment = useCallback(async () => {
        if (!newComment.trim()) return;
        if (role === 'guest') return;

        const userName = `User_${currentUserId?.slice(-4) || 'TW'}`;

        try {
            const messagesRef = collection(db, COLLECTIONS.discussions, company.id, COLLECTIONS.messages);
            const msgData = {
                user: userName,
                type: commentType,
                content: newComment.trim(),
                authorId: currentUserId || 'anonymous',
                createdAt: serverTimestamp(),
            };

            if (replyTo) {
                msgData.replyTo = {
                    messageId: replyTo.id,
                    userName: replyTo.userName,
                    content: replyTo.content.length > 50
                        ? replyTo.content.slice(0, 50) + '...'
                        : replyTo.content,
                };
            }

            await addDoc(messagesRef, msgData);
            setNewComment('');
            setReplyTo(null);
        } catch (error) {
            console.error('Failed to post comment:', error);
        }
    }, [newComment, commentType, company.id, currentUserId, role, replyTo]);

    const handleUserClick = (e, msg) => {
        if (msg.authorId === currentUserId) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setShowUserMenu({
            userName: msg.user,
            messageId: msg.id,
            content: msg.content,
            x: rect.left,
            y: rect.bottom + 4,
        });
    };

    const handleReply = (info) => {
        setReplyTo({
            id: info.messageId || info.id,
            userName: info.userName || info.user,
            content: info.content,
        });
        setShowUserMenu(null);
        setTimeout(() => chatInputRef.current?.focus(), 50);
    };

    const handleSaveStats = useCallback(async () => {
        try {
            const companyRef = doc(db, COLLECTIONS.companies, company.id);
            await updateDoc(companyRef, { stats });
            setIsEditingStats(false);
        } catch (error) {
            console.error('Failed to save stats:', error);
        }
    }, [company.id, stats]);

    const formatCurrency = (val) => val ? parseInt(val).toLocaleString() : '-';

    const formatNoteTime = (entry) => {
        if (!entry.createdAt?.seconds) return '剛剛';
        const date = new Date(entry.createdAt.seconds * 1000);
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 animate-in slide-in-from-right-4 fade-in duration-300">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-20">
                <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-4">
                    <button onClick={onBack} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                            {company.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="font-bold text-lg text-slate-900 leading-tight">{company.name}</h1>
                            <div className="text-xs text-slate-500 flex items-center gap-2">
                                <Building2 size={12} /> {company.industry}
                                {company.aliases && <span className="text-slate-300">|</span>}
                                <span className="text-slate-400">{company.aliases?.[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="max-w-3xl mx-auto px-4 flex gap-6 text-sm font-medium">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`pb-3 border-b-2 transition-colors ${activeTab === 'overview' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        公司概況 & 薪資
                    </button>
                    <button
                        onClick={() => setActiveTab('discussion')}
                        className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${activeTab === 'discussion' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                    >
                        討論串
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="即時同步"></span>
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar pb-24 md:pb-4">
                <div className="max-w-3xl mx-auto space-y-6">

                    {/* ==================== Overview Tab ==================== */}
                    {activeTab === 'overview' && (
                        <div className="space-y-6 animate-in fade-in zoom-in-95">
                            {/* Government Stats Card */}
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                    <div className="flex items-center gap-2">
                                        <Landmark className="text-slate-400" size={18} />
                                        <h3 className="font-bold text-slate-700">主計處 / 公開資訊觀測站 申報資料</h3>
                                    </div>
                                    {role === 'admin' && (
                                        !isEditingStats ? (
                                            <button onClick={() => setIsEditingStats(true)} className="text-xs flex items-center gap-1 text-indigo-600 hover:bg-indigo-50 px-2 py-1 rounded transition-colors font-medium">
                                                <Edit3 size={12} /> 編輯數據
                                            </button>
                                        ) : (
                                            <button onClick={handleSaveStats} className="text-xs flex items-center gap-1 text-emerald-600 hover:bg-emerald-50 px-2 py-1 rounded transition-colors font-medium">
                                                <Save size={12} /> 儲存變更
                                            </button>
                                        )
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-sm text-slate-500 font-medium">統計年度</div>
                                        {isEditingStats ? (
                                            <div className="flex items-center gap-1">
                                                <span className="text-slate-400 text-sm">民國</span>
                                                <input type="number" className="w-16 p-1 border rounded text-right" value={stats.year} onChange={e => setStats({ ...stats, year: e.target.value })} />
                                                <span className="text-slate-400 text-sm">年</span>
                                            </div>
                                        ) : (
                                            <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">民國 {stats.year} 年</div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 relative group">
                                            <div className="text-xs text-indigo-600 font-bold mb-1 uppercase tracking-wider">非主管職務平均薪資</div>
                                            {isEditingStats ? (
                                                <input type="number" className="w-full bg-white p-2 border border-indigo-200 rounded text-lg font-bold" value={stats.avg} onChange={e => setStats({ ...stats, avg: e.target.value })} />
                                            ) : (
                                                <div className="text-2xl font-black text-indigo-900 tracking-tight">${formatCurrency(stats.avg)}</div>
                                            )}
                                            <TrendingUp className="absolute right-4 bottom-4 text-indigo-200" size={24} />
                                        </div>
                                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 relative group">
                                            <div className="text-xs text-emerald-600 font-bold mb-1 uppercase tracking-wider">薪資中位數</div>
                                            {isEditingStats ? (
                                                <input type="number" className="w-full bg-white p-2 border border-emerald-200 rounded text-lg font-bold" value={stats.median} onChange={e => setStats({ ...stats, median: e.target.value })} />
                                            ) : (
                                                <div className="text-2xl font-black text-emerald-900 tracking-tight">${formatCurrency(stats.median)}</div>
                                            )}
                                            <BarChart3 className="absolute right-4 bottom-4 text-emerald-200" size={24} />
                                        </div>
                                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 relative group">
                                            <div className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">員工人數</div>
                                            {isEditingStats ? (
                                                <input type="number" className="w-full bg-white p-2 border border-slate-200 rounded text-lg font-bold" value={stats.count} onChange={e => setStats({ ...stats, count: e.target.value })} />
                                            ) : (
                                                <div className="text-2xl font-black text-slate-700 tracking-tight">{formatCurrency(stats.count)} <span className="text-sm font-normal text-slate-400">人</span></div>
                                            )}
                                            <Users className="absolute right-4 bottom-4 text-slate-200" size={24} />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-[10px] text-slate-400 text-center">
                                        * 資料來源：公開資訊觀測站 / 行政院主計總處。本平台數據僅供參考。
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-left group">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"><Briefcase size={16} /></div>
                                    <div className="font-bold text-slate-700">查看職缺</div>
                                    <div className="text-xs text-slate-400">前往求職網站</div>
                                </button>
                                <button className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-left group">
                                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"><AlertTriangle size={16} /></div>
                                    <div className="font-bold text-slate-700">回報資訊錯誤</div>
                                    <div className="text-xs text-slate-400">協助修正數據</div>
                                </button>
                            </div>

                            {/* Notes Section */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                                        <Clock size={18} className="text-indigo-500" />
                                        相關筆記
                                        <span className="text-sm font-normal text-slate-400">({displayEntries.length})</span>
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        {/* Title Filter */}
                                        <div className="relative">
                                            <button
                                                onClick={() => setShowTitleDropdown(!showTitleDropdown)}
                                                className={`px-3 py-1.5 text-xs font-medium rounded-lg border flex items-center gap-1 transition-colors ${titleFilter !== 'all' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                            >
                                                <Filter size={12} />
                                                {titleFilter === 'all' ? '全部職務' : titleFilter}
                                                <ChevronDown size={12} />
                                            </button>
                                            {showTitleDropdown && (
                                                <>
                                                    <div className="fixed inset-0 z-30" onClick={() => setShowTitleDropdown(false)} />
                                                    <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-40 min-w-[160px] py-1 max-h-60 overflow-y-auto custom-scrollbar">
                                                        <button
                                                            onClick={() => { setTitleFilter('all'); setShowTitleDropdown(false); }}
                                                            className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 ${titleFilter === 'all' ? 'text-indigo-600 font-medium' : 'text-slate-600'}`}
                                                        >
                                                            全部職務
                                                        </button>
                                                        {uniqueTitles.map(t => (
                                                            <button
                                                                key={t}
                                                                onClick={() => { setTitleFilter(t); setShowTitleDropdown(false); }}
                                                                className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 ${titleFilter === t ? 'text-indigo-600 font-medium' : 'text-slate-600'}`}
                                                            >
                                                                {t}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        {/* Sort Toggle */}
                                        <button
                                            onClick={() => setSortOrder(s => s === 'desc' ? 'asc' : 'desc')}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg border bg-white border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center gap-1 transition-colors"
                                        >
                                            <ArrowUpDown size={12} />
                                            {sortOrder === 'desc' ? '最新' : '最舊'}
                                        </button>
                                    </div>
                                </div>

                                {displayEntries.length === 0 && (
                                    <div className="text-center py-10 text-slate-400 bg-white rounded-xl border border-slate-200">
                                        <p className="text-sm">暫無相關筆記</p>
                                    </div>
                                )}

                                {displayEntries.map(entry => (
                                    <div key={entry.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-bold text-slate-800">{entry.title}</span>
                                                    <Badge color="gray">{entry.industry}</Badge>
                                                </div>
                                                <div className="text-xs text-slate-400 flex items-center gap-2">
                                                    <span>{entry.location}</span>
                                                    <span>•</span>
                                                    <span>年資 {entry.experience} 年</span>
                                                    <span>•</span>
                                                    <span>{formatNoteTime(entry)}</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xl font-bold text-emerald-600 font-mono tracking-tight">
                                                    {role === 'guest' ? '****' : parseInt(entry.salary).toLocaleString()}
                                                    <span className="text-xs text-slate-400 font-sans font-normal ml-1">/月</span>
                                                </div>
                                                <Badge color="blue">{entry.annual_package}</Badge>
                                            </div>
                                        </div>

                                        <div className="relative pl-4 border-l-2 border-indigo-100 py-1 my-3">
                                            <p className="text-slate-700 leading-relaxed text-sm">{entry.content}</p>
                                        </div>

                                        {onInteract && (
                                            <InteractionSection
                                                entry={entry}
                                                currentUserId={currentUserId}
                                                onInteract={onInteract}
                                                onDelete={onDeleteInteraction}
                                                onLoginRequire={onLoginRequire}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ==================== Discussion Tab (PTT BBS Style) ==================== */}
                    {activeTab === 'discussion' && (
                        <div className="bg-black/90 rounded-2xl overflow-hidden shadow-2xl min-h-[500px] flex flex-col animate-in fade-in zoom-in-95 font-mono">
                            {/* Terminal Header */}
                            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                                <div className="text-emerald-400 text-xs flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    bbs://salary-notebook/{company.id} — 即時同步
                                </div>
                                <div className="text-slate-500 text-xs">{messages.length} 則留言</div>
                            </div>

                            {/* Thread List — messages go DOWN (newest at bottom) */}
                            <div className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
                                {loadingMessages && (
                                    <div className="flex justify-center py-10">
                                        <Loader2 className="animate-spin text-slate-500" />
                                    </div>
                                )}
                                {!loadingMessages && messages.length === 0 && (
                                    <div className="text-slate-500 text-center py-10">尚無討論，成為第一個發言者！</div>
                                )}
                                {messages.map((t) => (
                                    <div key={t.id} id={`msg-${t.id}`} className="chat-message-row rounded-md transition-colors duration-500">
                                        {/* Reply Reference */}
                                        {t.replyTo && (
                                            <div
                                                className="ml-6 mb-0.5 flex items-center gap-1 text-xs text-slate-600 cursor-pointer hover:text-slate-400"
                                                onClick={() => {
                                                    const el = document.getElementById(`msg-${t.replyTo.messageId}`);
                                                    if (el) {
                                                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                        el.classList.add('bg-slate-700/50');
                                                        setTimeout(() => el.classList.remove('bg-slate-700/50'), 1500);
                                                    }
                                                }}
                                                title="點擊查看原始留言"
                                            >
                                                <Reply size={10} className="rotate-180 shrink-0" />
                                                <span className="text-slate-500 font-medium">@{t.replyTo.userName}:</span>
                                                <span className="text-slate-600 truncate chat-reply-snippet">{t.replyTo.content}</span>
                                            </div>
                                        )}
                                        <div className="flex gap-3 text-sm group px-1">
                                            <div className={`shrink-0 font-bold ${t.type === '推' ? 'text-emerald-400' :
                                                t.type === '噓' ? 'text-red-500' : 'text-yellow-400'
                                                }`}>
                                                {t.type}
                                            </div>
                                            <div className="flex-1 text-slate-300 break-all relative pr-8">
                                                <span
                                                    className={`mr-2 ${t.authorId !== currentUserId ? 'text-cyan-400 cursor-pointer hover-underline' : 'text-indigo-400'}`}
                                                    onClick={(e) => t.authorId !== currentUserId && handleUserClick(e, t)}
                                                    title="點擊顯示選單"
                                                >
                                                    {t.user}:
                                                </span>
                                                {t.content}
                                                <span className="text-slate-600 text-xs ml-2 opacity-50 group-hover:opacity-100">{t.time}</span>

                                                {role !== 'guest' && (
                                                    <button
                                                        onClick={() => handleReply(t)}
                                                        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-slate-500 hover:text-cyan-400 p-1 transition-all"
                                                        title="回覆此段留言"
                                                    >
                                                        <Reply size={14} className="rotate-180" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* User Menu Popup */}
                            {showUserMenu && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(null)} />
                                    <div
                                        className="fixed z-50 bg-slate-800 rounded-xl shadow-xl border border-slate-600 py-2 min-w-[160px] animate-in fade-in zoom-in-95"
                                        style={{ left: Math.min(showUserMenu.x, window.innerWidth - 180), top: showUserMenu.y }}
                                    >
                                        <div className="px-3 py-2 text-xs text-slate-400 font-medium border-b border-slate-700">
                                            @{showUserMenu.userName}
                                        </div>
                                        <button
                                            className="w-full px-3 py-2 text-sm text-left hover:bg-slate-700 flex items-center gap-2 text-slate-300"
                                            onClick={() => {
                                                setNewComment(prev => `@${showUserMenu.userName} ${prev}`);
                                                setShowUserMenu(null);
                                            }}
                                        >
                                            <Users size={14} /> 選人 (提及)
                                        </button>
                                        <button
                                            className="w-full px-3 py-2 text-sm text-left hover:bg-slate-700 flex items-center gap-2 text-slate-300"
                                            onClick={() => handleReply(showUserMenu)}
                                        >
                                            <Reply size={14} /> 回覆此訊息
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* Input Area */}
                            <div className="p-3 bg-slate-800 border-t border-slate-700">
                                {/* Reply Preview */}
                                {replyTo && (
                                    <div className="flex items-center gap-2 mb-2 px-2 py-1.5 bg-slate-900 rounded border-l-2 border-cyan-500 text-xs">
                                        <Reply size={10} className="text-cyan-400 shrink-0 rotate-180" />
                                        <span className="text-cyan-400 font-medium">@{replyTo.userName}</span>
                                        <span className="flex-1 truncate text-slate-500">{replyTo.content}</span>
                                        <button onClick={() => setReplyTo(null)} className="p-0.5 hover:bg-slate-700 rounded">
                                            <X size={12} className="text-slate-500" />
                                        </button>
                                    </div>
                                )}

                                <div className="flex gap-2 mb-2">
                                    {['推', '→', '噓'].map(type => (
                                        <button
                                            key={type}
                                            onClick={() => setCommentType(type)}
                                            className={`px-3 py-1 rounded text-xs font-bold transition-colors ${commentType === type
                                                ? (type === '推' ? 'bg-emerald-600 text-white' : type === '噓' ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white')
                                                : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        ref={chatInputRef}
                                        className="flex-1 bg-slate-900 border border-slate-700 rounded p-2 text-slate-200 text-sm outline-none focus:border-slate-500 placeholder:text-slate-600"
                                        placeholder={role === 'guest' ? '請先登入才能發言...' : '輸入討論內容...'}
                                        value={newComment}
                                        onChange={e => setNewComment(e.target.value)}
                                        onKeyDown={e => e.key === 'Enter' && handlePostComment()}
                                        disabled={role === 'guest'}
                                    />
                                    <button
                                        onClick={handlePostComment}
                                        disabled={!newComment.trim() || role === 'guest'}
                                        className="px-4 py-2 bg-slate-700 text-slate-200 rounded hover:bg-slate-600 text-sm font-bold disabled:opacity-40"
                                    >
                                        送出
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default React.memo(CompanyDetailView);
