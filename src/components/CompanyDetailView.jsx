import React, { useState, useEffect, useCallback } from 'react';
import {
    ArrowLeft, Building2, Landmark, Edit3, Save,
    TrendingUp, BarChart3, Users, Briefcase, AlertTriangle, Loader2
} from 'lucide-react';
import {
    db, COLLECTIONS,
    collection, addDoc, query, onSnapshot, orderBy, serverTimestamp,
    doc, updateDoc,
} from '../lib/firebase';

const CompanyDetailView = ({ company, onBack, role, currentUserId }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [messages, setMessages] = useState([]);
    const [loadingMessages, setLoadingMessages] = useState(true);
    const [newComment, setNewComment] = useState('');
    const [commentType, setCommentType] = useState('推');

    // Stats Editing State
    const [isEditingStats, setIsEditingStats] = useState(false);
    const [stats, setStats] = useState(company.stats || { median: 0, avg: 0, count: 0, year: 112 });

    // --- Real-time Discussion Subscription ---
    useEffect(() => {
        if (!company?.id) return;

        setLoadingMessages(true);
        const messagesRef = collection(db, COLLECTIONS.discussions, company.id, COLLECTIONS.messages);
        const q = query(messagesRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(docSnap => ({
                id: docSnap.id,
                ...docSnap.data(),
                // Format time
                time: docSnap.data().createdAt
                    ? formatTime(docSnap.data().createdAt)
                    : '剛剛'
            }));
            setMessages(msgs);
            setLoadingMessages(false);
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
        return `${date.getMonth() + 1}/${date.getDate()}`;
    };

    const handlePostComment = useCallback(async () => {
        if (!newComment.trim()) return;

        const userName = role === 'guest' ? 'Guest_User' : `User_${currentUserId?.slice(-4) || 'TW'}`;

        try {
            const messagesRef = collection(db, COLLECTIONS.discussions, company.id, COLLECTIONS.messages);
            await addDoc(messagesRef, {
                user: userName,
                type: commentType,
                content: newComment.trim(),
                authorId: currentUserId || 'anonymous',
                createdAt: serverTimestamp(),
            });
            setNewComment('');
        } catch (error) {
            console.error('Failed to post comment:', error);
        }
    }, [newComment, commentType, company.id, currentUserId, role]);

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

            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
                <div className="max-w-3xl mx-auto space-y-6">

                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-6 animate-in fade-in zoom-in-95">
                            {/* Government Stats Card */}
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                    <div className="flex items-center gap-2">
                                        <Landmark className="text-slate-400" size={18} />
                                        <h3 className="font-bold text-slate-700">主計處 / 公開資訊觀測站 申報資料</h3>
                                    </div>
                                    {!isEditingStats ? (
                                        <button onClick={() => setIsEditingStats(true)} className="text-xs flex items-center gap-1 text-indigo-600 hover:bg-indigo-50 px-2 py-1 rounded transition-colors font-medium">
                                            <Edit3 size={12} /> 編輯數據
                                        </button>
                                    ) : (
                                        <button onClick={handleSaveStats} className="text-xs flex items-center gap-1 text-emerald-600 hover:bg-emerald-50 px-2 py-1 rounded transition-colors font-medium">
                                            <Save size={12} /> 儲存變更
                                        </button>
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
                        </div>
                    )}

                    {/* Discussion Tab (BBS Style) — REAL-TIME via onSnapshot */}
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

                            {/* Thread List */}
                            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                                {loadingMessages && (
                                    <div className="flex justify-center py-10">
                                        <Loader2 className="animate-spin text-slate-500" />
                                    </div>
                                )}
                                {!loadingMessages && messages.length === 0 && (
                                    <div className="text-slate-500 text-center py-10">尚無討論，成為第一個發言者！</div>
                                )}
                                {messages.map((t) => (
                                    <div key={t.id} className="flex gap-3 text-sm group">
                                        <div className={`shrink-0 font-bold ${t.type === '推' ? 'text-emerald-400' :
                                            t.type === '噓' ? 'text-red-500' : 'text-yellow-400'
                                            }`}>
                                            {t.type}
                                        </div>
                                        <div className="flex-1 text-slate-300 break-all">
                                            <span className="text-slate-500 mr-2">{t.user}:</span>
                                            {t.content}
                                            <span className="text-slate-600 text-xs ml-2 opacity-50 group-hover:opacity-100">{t.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <div className="p-3 bg-slate-800 border-t border-slate-700">
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
                                        className="flex-1 bg-slate-900 border border-slate-700 rounded p-2 text-slate-200 text-sm outline-none focus:border-slate-500 placeholder:text-slate-600"
                                        placeholder="輸入討論內容..."
                                        value={newComment}
                                        onChange={e => setNewComment(e.target.value)}
                                        onKeyDown={e => e.key === 'Enter' && handlePostComment()}
                                    />
                                    <button
                                        onClick={handlePostComment}
                                        className="px-4 py-2 bg-slate-700 text-slate-200 rounded hover:bg-slate-600 text-sm font-bold"
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
