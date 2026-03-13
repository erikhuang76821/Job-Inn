import React, { useState } from 'react';
import { User, XCircle, LogIn, Shield, UserCircle, Edit3, Trash2 } from 'lucide-react';

export const CreateCompanyModal = ({ initialName, onClose, onSubmit }) => {
    const [form, setForm] = useState({ name: initialName || '', industry: '軟體/網路', aliases: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const aliasesArray = form.aliases.split(',').map(s => s.trim()).filter(Boolean);
        if (form.name && !aliasesArray.includes(form.name.toLowerCase())) aliasesArray.push(form.name.toLowerCase());
        onSubmit({ ...form, aliases: aliasesArray });
    };

    return (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
                <h3 className="text-xl font-bold mb-4">新增公司</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input className="w-full p-3 border rounded-xl" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="公司名稱" autoFocus required />
                    <select className="w-full p-3 border rounded-xl bg-white" value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })}>
                        <option>軟體/網路</option><option>半導體/電子</option><option>金融/銀行</option><option>電商/零售</option><option>傳統製造</option>
                    </select>
                    <div className="flex gap-3 mt-4">
                        <button type="button" onClick={onClose} className="flex-1 py-3 text-slate-500 font-bold">取消</button>
                        <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold">建立</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export const LoginModal = ({ onClose, onLoginAs }) => {
    return (
        <div className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-3xl max-w-sm w-full shadow-2xl text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
                    <LogIn size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">登入 Job-Inn</h3>
                <p className="text-slate-500 mb-6 text-sm">選擇身份登入，開始使用完整功能。</p>

                <div className="space-y-3">
                    <button
                        onClick={() => onLoginAs('user')}
                        className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                    >
                        <UserCircle size={18} /> 以用戶身份登入
                    </button>
                    <button
                        onClick={() => onLoginAs('admin')}
                        className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors"
                    >
                        <Shield size={18} /> 以審核員身份登入
                    </button>
                    <button onClick={onClose} className="w-full py-3 text-slate-400 font-medium text-sm">
                        稍後再說
                    </button>
                </div>
            </div>
        </div>
    );
};

export const SettingsModal = ({ onClose, appSettings, setAppSettings, appId, userEntries = [], onEditEntry, onDeleteEntry }) => (
    <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
                <h3 className="font-bold text-slate-700">系統設定</h3>
                <button onClick={onClose}><XCircle size={20} className="text-slate-400" /></button>
            </div>
            <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar">

                {/* 系統設定區塊 */}
                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">資料來源</h4>
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <div className="flex flex-col">
                            <span className="font-bold text-slate-700 text-sm">此版本資料來源</span>
                            <span className="text-xs text-slate-400">目前: {appSettings.useMockData ? '模擬資料' : 'Firebase API'}</span>
                        </div>
                        <button
                            onClick={() => setAppSettings(s => ({ ...s, useMockData: !s.useMockData }))}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${appSettings.useMockData ? 'bg-amber-400' : 'bg-indigo-600'}`}
                        >
                            <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${appSettings.useMockData ? 'translate-x-0' : 'translate-x-6'}`} />
                        </button>
                    </div>
                </div>

                {/* 個人筆記區塊 */}
                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1 flex items-center justify-between">
                        我的紀錄
                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{userEntries.length} 篇</span>
                    </h4>

                    {userEntries.length === 0 ? (
                        <div className="text-center py-6 text-slate-400 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                            尚無發布過筆記
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {userEntries.map(entry => (
                                <div key={entry.id} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-indigo-200 transition-colors">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <div className="font-bold text-slate-700 text-sm">{entry.company}</div>
                                            <div className="text-xs text-slate-500">{entry.title}</div>
                                        </div>
                                        <div className="flex gap-1">
                                            <button
                                                onClick={() => { onEditEntry(entry); onClose(); }}
                                                className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                title="編輯"
                                            >
                                                <Edit3 size={14} />
                                            </button>
                                            <button
                                                onClick={() => onDeleteEntry(entry.id)}
                                                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                title="刪除"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-1 border-l-2 border-slate-200 pl-2">
                                        {entry.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="text-xs text-center text-slate-400 pt-4 border-t border-slate-100">
                    App ID: {appId} <br />
                    Version: 12.0 (PWA Edition)
                </div>
            </div>
        </div>
    </div>
);
