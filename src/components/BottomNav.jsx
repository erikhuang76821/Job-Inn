import React from 'react';
import { Home, Plus, Settings, Gift } from 'lucide-react';

const BottomNav = ({ activeTab, setActiveTab, requireLogin, onShowSubmitModal, onShowSettingsModal, onShowLottery, onBackToHome, filters, setFilters }) => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-16 flex items-center justify-around z-40 pb-safe">
        <button
            onClick={() => { setActiveTab('home'); setFilters({ ...filters, selectedCompany: null }); onBackToHome(); }}
            className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-indigo-600' : 'text-slate-400'}`}
        >
            <Home size={22} />
            <span className="text-[10px] font-medium">首頁</span>
        </button>
        <button
            onClick={() => onShowLottery?.()}
            className="flex flex-col items-center gap-1 text-slate-400"
        >
            <Gift size={22} className="text-amber-500" />
            <span className="text-[10px] font-medium">開獎</span>
        </button>
        <button
            onClick={() => !requireLogin() && onShowSubmitModal()}
            className="flex flex-col items-center gap-1 text-slate-400"
        >
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg -mt-5 border-4 border-slate-50">
                <Plus size={24} />
            </div>
            <span className="text-[10px] font-medium">新增</span>
        </button>
        <button
            onClick={() => onShowSettingsModal?.()}
            className={`flex flex-col items-center gap-1 ${activeTab === 'settings' ? 'text-indigo-600' : 'text-slate-400'}`}
        >
            <Settings size={22} />
            <span className="text-[10px] font-medium">設定</span>
        </button>
    </div>
);

export default React.memo(BottomNav);
