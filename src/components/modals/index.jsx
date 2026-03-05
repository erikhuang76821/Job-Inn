import React, { useState } from 'react';
import { User, XCircle } from 'lucide-react';

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

export const LoginModal = ({ onClose }) => (
    <div className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl max-w-sm w-full shadow-2xl text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <User size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">請先登入</h3>
            <p className="text-slate-500 mb-8">此功能需要會員權限，請切換身份後繼續。</p>
            <button onClick={onClose} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold">我知道了</button>
        </div>
    </div>
);

export const SettingsModal = ({ onClose, appSettings, setAppSettings, appId }) => (
    <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-700">系統設定</h3>
                <button onClick={onClose}><XCircle size={20} className="text-slate-400" /></button>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-700 text-sm">資料來源模式</span>
                        <span className="text-xs text-slate-400">目前: {appSettings.useMockData ? '模擬資料' : 'Firebase API'}</span>
                    </div>
                    <button
                        onClick={() => setAppSettings(s => ({ ...s, useMockData: !s.useMockData }))}
                        className={`relative w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${appSettings.useMockData ? 'bg-amber-400' : 'bg-indigo-600'}`}
                    >
                        <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${appSettings.useMockData ? 'translate-x-0' : 'translate-x-6'}`} />
                    </button>
                </div>
                <div className="text-xs text-center text-slate-400 mt-4">
                    App ID: {appId} <br />
                    Version: 11.0 (Notebook Style)
                </div>
            </div>
        </div>
    </div>
);
