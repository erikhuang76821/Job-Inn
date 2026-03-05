import React from 'react';
import { Sparkles, Plus, Layout, Settings, User } from 'lucide-react';

const Sidebar = ({ companies, filters, setFilters, activeView, viewingCompany, currentRole, setCurrentRole, onCompanyClick, onBackToHome, requireLogin, onShowSubmitModal, onShowSettingsModal }) => (
    <div className="w-72 flex-shrink-0 bg-[#F9FAFB] border-r border-slate-200 flex flex-col h-full hidden md:flex">
        <div className="p-4 border-b border-slate-200 flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                <Sparkles size={16} />
            </div>
            <h1 className="font-semibold text-slate-800 tracking-tight">Salary Notebook</h1>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
            {/* Actions */}
            <button
                onClick={() => !requireLogin() && onShowSubmitModal()}
                className="w-full flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-slate-700 font-medium group"
            >
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 group-hover:scale-110 transition-transform">
                    <Plus size={18} />
                </div>
                新增薪資情報
            </button>

            {/* Filters / Sources */}
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">資料來源 (公司)</h3>
                <div className="space-y-1">
                    <button
                        onClick={() => { setFilters({ ...filters, selectedCompany: null }); onBackToHome(); }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${!filters.selectedCompany && activeView === 'home' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        <Layout size={16} />
                        全部情報
                    </button>
                    {companies.map(c => (
                        <button
                            key={c.id}
                            onClick={() => onCompanyClick(c.name)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${viewingCompany?.name === c.name && activeView === 'company-detail' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                        >
                            <div className="w-4 h-4 rounded bg-slate-200 flex items-center justify-center text-[8px] text-slate-500 font-bold flex-shrink-0">
                                {c.name.charAt(0)}
                            </div>
                            <span className="truncate">{c.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Fixed Bottom Section */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex-shrink-0">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">設定</h3>
            <div className="space-y-1">
                <button onClick={onShowSettingsModal} className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-slate-600 hover:bg-slate-100">
                    <Settings size={16} /> 系統管理
                </button>
                <button onClick={() => {
                    const roles = ['guest', 'user', 'admin'];
                    const next = roles[(roles.indexOf(currentRole) + 1) % roles.length];
                    setCurrentRole(next);
                }} className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-slate-600 hover:bg-slate-100">
                    <User size={16} /> 切換身份: {currentRole}
                </button>
            </div>
        </div>
    </div>
);

export default React.memo(Sidebar);
