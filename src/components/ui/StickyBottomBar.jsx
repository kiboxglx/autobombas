import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyBottomBar = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex bg-slate-900 border-t border-slate-700 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <a
                href="https://wa.me/5538999999999"
                className="w-[70%] flex items-center justify-center gap-2 py-4 bg-emerald-600 text-white font-bold text-sm relative overflow-hidden"
            >
                <span className="absolute inset-0 bg-white/20 animate-pulse"></span>
                <MessageCircle size={20} className="relative z-10" />
                <span className="relative z-10">Orçamento via WhatsApp</span>
            </a>
            <a
                href="tel:+5538999999999"
                className="w-[30%] flex items-center justify-center gap-2 py-4 bg-slate-800 text-white font-bold text-sm border-l border-slate-700 hover:bg-slate-700 active:bg-slate-600 transition-colors"
            >
                <Phone size={20} />
                Ligar
            </a>
        </div>
    );
};

export default StickyBottomBar;
