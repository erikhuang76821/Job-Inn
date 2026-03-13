import React, { useState, useEffect, useMemo } from 'react';
import { ThumbsUp, ThumbsDown, Edit3, Trash2, Send } from 'lucide-react';

const InteractionSection = ({ entry, currentUserId, onInteract, onDelete, onLoginRequire }) => {
    const [comment, setComment] = useState('');
    const [activeAction, setActiveAction] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const interactions = entry.interactions || [];

    const myInteraction = useMemo(
        () => currentUserId ? interactions.find(i => i.userId === currentUserId) : null,
        [currentUserId, interactions]
    );

    useEffect(() => {
        if (isEditing && myInteraction) {
            setComment(myInteraction.comment);
            setActiveAction(myInteraction.type);
        }
    }, [isEditing, myInteraction]);

    const handleSend = () => {
        if (!comment.trim()) return;
        onInteract(entry.id, activeAction, comment);
        setComment('');
        setActiveAction(null);
        setIsEditing(false);
    };

    return (
        <div className="mt-4 pt-3 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
            {/* Stats Header */}
            <div className="flex items-center justify-between mb-3 text-slate-500">
                <div className="flex gap-4 text-xs font-medium">
                    <span className="flex items-center gap-1"><ThumbsUp size={14} /> {interactions.filter(i => i.type === 'like').length}</span>
                    <span className="flex items-center gap-1"><ThumbsDown size={14} /> {interactions.filter(i => i.type === 'dislike').length}</span>
                </div>
                {myInteraction && !isEditing && <span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-600">已評價</span>}
            </div>

            {myInteraction && !isEditing ? (
                <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-start group">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs px-1.5 py-0.5 rounded ${myInteraction.type === 'like' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                {myInteraction.type === 'like' ? '推薦' : '反推'}
                            </span>
                            <span className="text-xs text-slate-400">我</span>
                        </div>
                        <p className="text-sm text-slate-700 break-all">{myInteraction.comment}</p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setIsEditing(true)} className="p-1 text-slate-400 hover:text-indigo-600"><Edit3 size={14} /></button>
                        <button onClick={() => onDelete(entry.id)} className="p-1 text-slate-400 hover:text-red-500"><Trash2 size={14} /></button>
                    </div>
                </div>
            ) : (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-1">
                    <div className="flex gap-2">
                        <button
                            onClick={() => { if (!currentUserId) return onLoginRequire(); setActiveAction('like'); }}
                            className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm rounded-lg border transition-all ${activeAction === 'like' ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-1 ring-emerald-500' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}
                        >
                            <ThumbsUp size={16} className={activeAction === 'like' ? 'fill-current' : ''} /> 值得推薦
                        </button>
                        <button
                            onClick={() => { if (!currentUserId) return onLoginRequire(); setActiveAction('dislike'); }}
                            className={`flex-1 py-2 flex items-center justify-center gap-2 text-sm rounded-lg border transition-all ${activeAction === 'dislike' ? 'bg-rose-50 border-rose-500 text-rose-700 ring-1 ring-rose-500' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}
                        >
                            <ThumbsDown size={16} className={activeAction === 'dislike' ? 'fill-current' : ''} /> 考慮一下
                        </button>
                    </div>

                    {activeAction && (
                        <div className="flex gap-2">
                            <input
                                className="flex-1 text-sm p-2.5 border border-slate-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                                placeholder={activeAction === 'like' ? "分享這間公司的優點..." : "分享需要注意的地方..."}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!comment.trim()}
                                className="px-4 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default React.memo(InteractionSection);
