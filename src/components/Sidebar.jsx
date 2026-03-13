import React from 'react';
import { Sparkles, Plus, Layout, Settings, LogIn, LogOut, Shield, User, MessageCircle } from 'lucide-react';

const Sidebar = ({
    companies, filters, setFilters, activeView, activeTab, viewingCompany,
    currentRole, user, onCompanyClick, onBackToHome, requireLogin,
    onShowSubmitModal, onShowSettingsModal, onLogin, onLogout, onSetActiveTab
}) => (
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

            {/* Navigation */}
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">頁面</h3>
                <div className="space-y-1">
                    <button
                        onClick={() => { onSetActiveTab('home'); onBackToHome(); }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${activeTab === 'home' && activeView !== 'company-detail' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        <Layout size={16} /> 首頁 (筆記)
                    </button>

                </div>
            </div>

            {/* Company List */}
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">公司列表</h3>
                <div className="space-y-1">
                    <button
                        onClick={() => { setFilters({ ...filters, selectedCompany: null }); onSetActiveTab('home'); onBackToHome(); }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${!filters.selectedCompany && activeView === 'home' && activeTab === 'home' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
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
            {/* Role Indicator */}
            <div className="flex items-center gap-2 mb-3 px-1">
                <div className={`w-2 h-2 rounded-full ${currentRole === 'admin' ? 'bg-amber-500' : currentRole === 'user' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                <span className="text-xs text-slate-500">
                    {currentRole === 'admin' ? '審核員' : currentRole === 'user' ? '已登入用戶' : '訪客 (未登入)'}
                </span>
                {currentRole !== 'guest' && (
                    <span className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-400 ml-auto">
                        {user?.uid?.slice(-4)}
                    </span>
                )}
            </div>

            <div className="space-y-1">
                <button onClick={onShowSettingsModal} className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-slate-600 hover:bg-slate-100">
                    <Settings size={16} /> 系統設定
                </button>
                {currentRole === 'guest' ? (
                    <button onClick={onLogin} className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-indigo-600 hover:bg-indigo-50 font-medium">
                        <LogIn size={16} /> 登入
                    </button>
                ) : (
                    <button onClick={onLogout} className="w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-rose-500 hover:bg-rose-50">
                        <LogOut size={16} /> 登出
                    </button>
                )}
            </div>
        </div>
    </div>
);

export default React.memo(Sidebar);
