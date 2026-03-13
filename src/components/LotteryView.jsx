import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
    ArrowLeft, Gift, Plus, X, ChevronRight, MessageSquare,
    Loader2, Send
} from 'lucide-react';
import {
    db, COLLECTIONS,
    collection, addDoc, query, onSnapshot, orderBy, serverTimestamp,
    doc, updateDoc,
} from '../lib/firebase';

const LotteryView = ({ onBack, role, currentUserId }) => {
    // Posts
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Replies
    const [expandedId, setExpandedId] = useState(null);
    const [replies, setReplies] = useState({});
    const [loadingReplies, setLoadingReplies] = useState({});
    const [replyInput, setReplyInput] = useState({});
    const inputRef = useRef(null);

    // Subscribe to all lottery posts (global)
    useEffect(() => {
        setLoading(true);
        const q = query(
            collection(db, COLLECTIONS.lotteryPosts),
            orderBy('createdAt', 'desc')
        );
        const unsub = onSnapshot(q, snap => {
            setPosts(snap.docs.map(d => {
                const data = d.data();
                return {
                    id: d.id, ...data,
                    time: data.createdAt?.toDate?.()?.toLocaleDateString?.('zh-TW') || '',
                };
            }));
            setLoading(false);
        });
        return () => unsub();
    }, []);

    // Subscribe to replies for expanded post
    useEffect(() => {
        if (!expandedId) return;
        setLoadingReplies(prev => ({ ...prev, [expandedId]: true }));
        const q = query(
            collection(db, COLLECTIONS.lotteryPosts, expandedId, COLLECTIONS.replies),
            orderBy('createdAt', 'asc')
        );
        const unsub = onSnapshot(q, snap => {
            setReplies(prev => ({
                ...prev,
                [expandedId]: snap.docs.map(d => {
                    const data = d.data();
                    return {
                        id: d.id, ...data,
                        time: data.createdAt?.toDate?.()?.toLocaleString?.('zh-TW', {
                            month: 'numeric', day: 'numeric',
                            hour: '2-digit', minute: '2-digit'
                        }) || '',
                    };
                })
            }));
            setLoadingReplies(prev => ({ ...prev, [expandedId]: false }));
        });
        return () => unsub();
    }, [expandedId]);

    // Create post
    const handleCreate = useCallback(async () => {
        if (!title.trim() || !content.trim() || role === 'guest') return;
        const userName = `User_${currentUserId?.slice(-4) || 'TW'}`;
        try {
            await addDoc(collection(db, COLLECTIONS.lotteryPosts), {
                title: title.trim(),
                content: content.trim(),
                user: userName,
                authorId: currentUserId || 'anonymous',
                createdAt: serverTimestamp(),
                replyCount: 0,
            });
            setTitle('');
            setContent('');
            setShowForm(false);
        } catch (e) {
            console.error('Failed to create post:', e);
        }
    }, [title, content, currentUserId, role]);

    // Post reply (no type — plain text reply)
    const handleReply = useCallback(async (postId) => {
        const text = replyInput[postId]?.trim();
        if (!text || role === 'guest') return;
        const userName = `User_${currentUserId?.slice(-4) || 'TW'}`;
        try {
            await addDoc(collection(db, COLLECTIONS.lotteryPosts, postId, COLLECTIONS.replies), {
                content: text,
                user: userName,
                authorId: currentUserId || 'anonymous',
                createdAt: serverTimestamp(),
            });
            const postRef = doc(db, COLLECTIONS.lotteryPosts, postId);
            const p = posts.find(x => x.id === postId);
            await updateDoc(postRef, { replyCount: (p?.replyCount || 0) + 1 });
            setReplyInput(prev => ({ ...prev, [postId]: '' }));
        } catch (e) {
            console.error('Failed to post reply:', e);
        }
    }, [replyInput, currentUserId, role, posts]);

    return (
        <div className="flex flex-col h-full bg-slate-50 animate-in slide-in-from-right-4 fade-in">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-20">
                <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
                    <button onClick={onBack} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex items-center gap-2 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm">
                            <Gift size={20} />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg text-slate-900 leading-tight">開獎情報</h1>
                            <p className="text-xs text-slate-500">全站開獎資訊彙整</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar pb-24 md:pb-4">
                <div className="max-w-3xl mx-auto space-y-4">

                    {/* New Post Button */}
                    {role !== 'guest' && !showForm && (
                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full flex items-center gap-3 p-4 bg-white border-2 border-dashed border-slate-200 rounded-2xl hover:border-amber-300 hover:bg-amber-50/30 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                                <Plus size={20} />
                            </div>
                            <span className="font-medium text-slate-600 group-hover:text-amber-700 transition-colors">發布開獎情報</span>
                        </button>
                    )}

                    {/* New Post Form */}
                    {showForm && (
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-top-2 fade-in">
                            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-amber-50/50">
                                <div className="flex items-center gap-2">
                                    <Gift className="text-amber-500" size={18} />
                                    <h3 className="font-bold text-slate-700">發布開獎情報</h3>
                                </div>
                                <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-200 rounded-full">
                                    <X size={18} className="text-slate-400" />
                                </button>
                            </div>
                            <div className="p-4 space-y-3">
                                <input
                                    className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                                    placeholder="標題，例：台積電 113 年終開獎"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    autoFocus
                                />
                                <textarea
                                    className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-amber-400 text-sm h-28 resize-none"
                                    placeholder="開獎內容，例：保底2個月、績效1-4個月..."
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                />
                                <div className="flex gap-2 justify-end">
                                    <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
                                        取消
                                    </button>
                                    <button
                                        onClick={handleCreate}
                                        disabled={!title.trim() || !content.trim()}
                                        className="px-5 py-2 bg-amber-500 text-white text-sm font-bold rounded-xl hover:bg-amber-600 shadow-sm disabled:opacity-40 transition-all"
                                    >
                                        發布
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Loading */}
                    {loading && (
                        <div className="flex justify-center py-16">
                            <Loader2 className="animate-spin text-amber-500" size={28} />
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && posts.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                            <Gift size={48} className="mx-auto mb-4 text-slate-200" />
                            <p className="text-slate-500 font-medium text-lg">尚無開獎情報</p>
                            <p className="text-sm text-slate-400 mt-1">成為第一個分享開獎結果的人！</p>
                        </div>
                    )}

                    {/* Posts List */}
                    {posts.map(post => (
                        <div key={post.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            {/* Post Header — clickable */}
                            <div
                                className="p-4 md:p-5 cursor-pointer hover:bg-slate-50/50 transition-colors"
                                onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <Gift size={16} className="text-amber-500 shrink-0" />
                                            <h4 className="font-bold text-slate-800 truncate">{post.title}</h4>
                                        </div>
                                        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{post.content}</p>
                                    </div>
                                    <ChevronRight size={18} className={`text-slate-400 shrink-0 transition-transform mt-1 ${expandedId === post.id ? 'rotate-90' : ''}`} />
                                </div>
                                <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
                                    <span className="font-medium text-slate-500">{post.user}</span>
                                    <span>{post.time}</span>
                                    <span className="flex items-center gap-1 ml-auto">
                                        <MessageSquare size={12} />
                                        {post.replyCount || 0} 則回覆
                                    </span>
                                </div>
                            </div>

                            {/* Expanded: Replies */}
                            {expandedId === post.id && (
                                <div className="border-t border-slate-200 animate-in slide-in-from-top-1 fade-in">
                                    {/* Replies List — white bg, clearly separated */}
                                    <div className="divide-y divide-slate-100">
                                        {loadingReplies[post.id] && (
                                            <div className="flex justify-center py-6">
                                                <Loader2 size={18} className="animate-spin text-slate-400" />
                                            </div>
                                        )}
                                        {!loadingReplies[post.id] && (!replies[post.id] || replies[post.id].length === 0) && (
                                            <div className="text-slate-400 text-sm text-center py-8">尚無回覆，來說點什麼吧</div>
                                        )}
                                        {(replies[post.id] || []).map(reply => (
                                            <div key={reply.id} className="px-5 py-3 bg-white">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-sm font-semibold text-slate-700">{reply.user}</span>
                                                    <span className="text-xs text-slate-400">{reply.time}</span>
                                                </div>
                                                <p className="text-sm text-slate-800 leading-relaxed">{reply.content}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Reply Input — clean white style */}
                                    {role !== 'guest' && (
                                        <div className="p-4 border-t border-slate-200 bg-slate-50/50">
                                            <div className="flex gap-2">
                                                <input
                                                    ref={inputRef}
                                                    className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder:text-slate-400"
                                                    placeholder="輸入回覆..."
                                                    value={replyInput[post.id] || ''}
                                                    onChange={e => setReplyInput(prev => ({ ...prev, [post.id]: e.target.value }))}
                                                    onKeyDown={e => e.key === 'Enter' && handleReply(post.id)}
                                                />
                                                <button
                                                    onClick={() => handleReply(post.id)}
                                                    disabled={!replyInput[post.id]?.trim()}
                                                    className="px-4 py-2.5 bg-amber-500 text-white rounded-xl hover:bg-amber-600 disabled:opacity-40 transition-all flex items-center gap-1.5 text-sm font-medium"
                                                >
                                                    <Send size={14} />
                                                    送出
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(LotteryView);
