import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
    MessageCircle, Send, Reply, X, ChevronDown, Loader2, Users
} from 'lucide-react';
import {
    db, COLLECTIONS,
    collection, addDoc, query, onSnapshot, orderBy, serverTimestamp,
} from '../lib/firebase';

const ChatRoom = ({ companies, currentUserId, role }) => {
    const [selectedCompanyId, setSelectedCompanyId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState('');
    const [commentType, setCommentType] = useState('推');
    const [replyTo, setReplyTo] = useState(null); // { id, userName, content }
    const [showUserMenu, setShowUserMenu] = useState(null); // { userName, messageId, x, y }
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    const selectedCompany = useMemo(
        () => companies.find(c => c.id === selectedCompanyId),
        [companies, selectedCompanyId]
    );

    // Auto-select first company if none selected
    useEffect(() => {
        if (!selectedCompanyId && companies.length > 0) {
            setSelectedCompanyId(companies[0].id);
        }
    }, [companies, selectedCompanyId]);

    // Subscribe to messages for selected company
    useEffect(() => {
        if (!selectedCompanyId || !db) return;

        setLoading(true);
        const messagesRef = collection(db, COLLECTIONS.discussions, selectedCompanyId, COLLECTIONS.messages);
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
            setLoading(false);
            // Scroll to bottom on new messages
            setTimeout(() => scrollToBottom(), 100);
        }, (error) => {
            console.error('Chat subscription error:', error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [selectedCompanyId]);

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

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSend = useCallback(async () => {
        if (!newMessage.trim() || !selectedCompanyId) return;
        if (role === 'guest') return;

        const userName = `User_${currentUserId?.slice(-4) || 'TW'}`;

        try {
            const messagesRef = collection(db, COLLECTIONS.discussions, selectedCompanyId, COLLECTIONS.messages);
            const msgData = {
                user: userName,
                type: commentType,
                content: newMessage.trim(),
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
            setNewMessage('');
            setReplyTo(null);
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    }, [newMessage, commentType, selectedCompanyId, currentUserId, role, replyTo]);

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

    const handleReply = (msg) => {
        setReplyTo({
            id: msg.messageId || msg.id,
            userName: msg.userName || msg.user,
            content: msg.content,
        });
        setShowUserMenu(null);
    };

    return (
        <div className="flex flex-col h-full bg-slate-50">
            {/* Header: Company Selector */}
            <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3 flex-shrink-0 z-20">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                    <MessageCircle size={16} />
                </div>
                <div className="flex-1">
                    <select
                        className="w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                        value={selectedCompanyId || ''}
                        onChange={e => setSelectedCompanyId(e.target.value)}
                    >
                        <option value="" disabled>選擇公司聊天室...</option>
                        {companies.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                    <Users size={12} />
                    <span>{messages.length} 則</span>
                </div>
            </div>

            {/* Messages Area */}
            <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 custom-scrollbar chat-messages-container"
            >
                {!selectedCompanyId && (
                    <div className="text-center py-20 text-slate-400">
                        <MessageCircle size={48} className="mx-auto mb-4 opacity-30" />
                        <p className="font-medium">選擇一家公司開始聊天</p>
                    </div>
                )}

                {selectedCompanyId && loading && (
                    <div className="flex justify-center py-10">
                        <Loader2 className="animate-spin text-indigo-500" />
                    </div>
                )}

                {selectedCompanyId && !loading && messages.length === 0 && (
                    <div className="text-center py-20 text-slate-400">
                        <MessageCircle size={40} className="mx-auto mb-3 opacity-30" />
                        <p className="font-medium">尚無討論，成為第一個發言者！</p>
                    </div>
                )}

                {messages.map((msg) => (
                    <div key={msg.id} className="chat-message-row mb-3 animate-in fade-in">
                        {/* Reply Reference */}
                        {msg.replyTo && (
                            <div className="chat-reply-ref ml-8 mb-1 flex items-center gap-2 text-xs text-slate-400">
                                <Reply size={12} className="rotate-180" />
                                <span className="font-medium text-slate-500">@{msg.replyTo.userName}</span>
                                <span className="truncate chat-reply-snippet">{msg.replyTo.content}</span>
                            </div>
                        )}

                        <div className="flex gap-3 text-sm group">
                            <div className={`shrink-0 font-bold chat-type-badge ${msg.type === '推' ? 'text-emerald-400' :
                                msg.type === '噓' ? 'text-red-500' : 'text-yellow-400'
                                }`}>
                                {msg.type}
                            </div>
                            <div className="flex-1 text-slate-700 break-all">
                                <span
                                    className={`chat-username font-medium mr-2 ${msg.authorId !== currentUserId ? 'cursor-pointer hover-underline' : 'text-indigo-600'
                                        }`}
                                    onClick={(e) => msg.authorId !== currentUserId && handleUserClick(e, msg)}
                                >
                                    {msg.user}:
                                </span>
                                {msg.content}
                                <span className="text-xs text-slate-400 ml-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {msg.time}
                                </span>
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
                        className="fixed z-50 bg-white rounded-xl shadow-xl border border-slate-200 py-2 min-w-[160px] animate-in fade-in zoom-in-95"
                        style={{ left: Math.min(showUserMenu.x, window.innerWidth - 180), top: showUserMenu.y }}
                    >
                        <div className="px-3 py-2 text-xs text-slate-400 font-medium border-b border-slate-100">
                            @{showUserMenu.userName}
                        </div>
                        <button
                            className="w-full px-3 py-2 text-sm text-left hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                            onClick={() => {
                                setNewMessage(prev => `@${showUserMenu.userName} ${prev}`);
                                setShowUserMenu(null);
                            }}
                        >
                            <Users size={14} /> 選人 (提及)
                        </button>
                        <button
                            className="w-full px-3 py-2 text-sm text-left hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                            onClick={() => handleReply(showUserMenu)}
                        >
                            <Reply size={14} /> 回覆此訊息
                        </button>
                    </div>
                </>
            )}

            {/* Input Area */}
            {selectedCompanyId && (
                <div className="bg-white border-t border-slate-200 p-3 flex-shrink-0 pb-safe">
                    {/* Reply Preview */}
                    {replyTo && (
                        <div className="chat-reply-preview flex items-center gap-2 mb-2 p-2 bg-slate-50 rounded-lg border-l-3 border-indigo-400 text-xs">
                            <Reply size={12} className="text-indigo-500 shrink-0 rotate-180" />
                            <span className="text-slate-500 font-medium">@{replyTo.userName}</span>
                            <span className="flex-1 truncate text-slate-400">{replyTo.content}</span>
                            <button onClick={() => setReplyTo(null)} className="p-0.5 hover:bg-slate-200 rounded">
                                <X size={14} className="text-slate-400" />
                            </button>
                        </div>
                    )}

                    {/* Type Selector */}
                    <div className="flex gap-2 mb-2">
                        {['推', '→', '噓'].map(type => (
                            <button
                                key={type}
                                onClick={() => setCommentType(type)}
                                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${commentType === type
                                    ? (type === '推' ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : type === '噓' ? 'bg-rose-100 text-rose-700 border border-rose-300' : 'bg-amber-100 text-amber-700 border border-amber-300')
                                    : 'bg-slate-100 text-slate-500 border border-transparent hover:bg-slate-200'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="flex gap-2">
                        <input
                            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-slate-400"
                            placeholder={role === 'guest' ? '請先登入才能發言...' : '輸入訊息...'}
                            value={newMessage}
                            onChange={e => setNewMessage(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
                            disabled={role === 'guest'}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!newMessage.trim() || role === 'guest'}
                            className="px-4 bg-indigo-600 text-white rounded-xl disabled:opacity-40 hover:bg-indigo-700 transition-colors shadow-sm"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default React.memo(ChatRoom);
