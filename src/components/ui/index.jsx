import React from 'react';

export const NoteCard = ({ children, className = "", onClick }) => (
    <div onClick={onClick} className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden ${className}`}>
        {children}
    </div>
);

export const Chip = ({ label, active, onClick, icon: Icon }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${active
                ? 'bg-indigo-100 text-indigo-700 border-indigo-200'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
    >
        {Icon && <Icon size={14} />}
        {label}
    </button>
);

export const Badge = ({ children, color = "blue" }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-700 border-blue-100",
        green: "bg-emerald-50 text-emerald-700 border-emerald-100",
        gray: "bg-slate-100 text-slate-600 border-slate-200",
    };
    return <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${colors[color] || colors.blue}`}>{children}</span>;
};
