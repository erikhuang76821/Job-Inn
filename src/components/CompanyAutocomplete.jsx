import React, { useState, useEffect, useRef } from 'react';
import { Building2 } from 'lucide-react';

const CompanyAutocomplete = ({ value, onChange, onSelect, companies, onCreateNew }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInput = (e) => {
        const val = e.target.value;
        onChange(val);

        if (!val.trim()) {
            setSuggestions([]);
            return;
        }

        const lowerVal = val.toLowerCase();
        const filtered = companies.filter(c =>
            c.name.toLowerCase().includes(lowerVal) ||
            (c.aliases && c.aliases.some(alias => alias.toLowerCase().includes(lowerVal)))
        );
        setSuggestions(filtered);
        setShowSuggestions(true);
    };

    const handleSelect = (company) => {
        onChange(company.name);
        if (onSelect) onSelect(company);
        setShowSuggestions(false);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    required
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
                    value={value}
                    onChange={handleInput}
                    onFocus={() => { if (value) setShowSuggestions(true); }}
                    placeholder="公司名稱 (如: Google...)"
                    autoComplete="off"
                />
            </div>

            {showSuggestions && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                    {suggestions.length > 0 ? (
                        suggestions.map(c => (
                            <div
                                key={c.id}
                                onClick={() => handleSelect(c)}
                                className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0 flex items-center justify-between group"
                            >
                                <div>
                                    <div className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">{c.name}</div>
                                    <div className="text-xs text-slate-400">{c.industry}</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-3 text-sm text-slate-500 text-center">找不到 "{value}"</div>
                    )}
                    <div
                        onClick={() => { setShowSuggestions(false); onCreateNew(value); }}
                        className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 cursor-pointer text-indigo-700 font-bold text-sm sticky bottom-0 text-center"
                    >
                        + 建立 "{value}"
                    </div>
                </div>
            )}
        </div>
    );
};

export default React.memo(CompanyAutocomplete);
