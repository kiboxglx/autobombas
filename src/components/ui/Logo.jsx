import React, { useState } from 'react';

// Logo Inteligente com Acessibilidade
const Logo = ({ className = "h-12" }) => {
    const [imgError, setImgError] = useState(false);

    if (imgError) {
        return (
            <div className="flex items-center gap-3" aria-label="Auto Bombas Logo">
                <div className="relative w-12 h-12 bg-slate-900 border-2 border-cyan-500 rounded-xl transform rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] overflow-hidden">
                    <div className="transform -rotate-45 flex items-center justify-center">
                        <span className="font-black text-2xl text-cyan-500 tracking-tighter" style={{ textShadow: '1px 1px 0px rgba(255,255,255,0.3)' }}>A</span>
                        <span className="font-black text-2xl text-white tracking-tighter ml-[-5px]">B</span>
                    </div>
                    <div className="absolute bottom-0 w-full h-3 bg-gradient-to-t from-black to-transparent transform -rotate-45 translate-y-2"></div>
                </div>
                <div className="leading-none">
                    <h1 className="text-xl font-bold text-white tracking-tight">AUTO<span className="text-cyan-400">BOMBAS</span></h1>
                    <p className="text-[9px] text-cyan-500 uppercase tracking-widest font-bold bg-cyan-900/10 px-1 rounded inline-block mt-1">Especialistas</p>
                </div>
            </div>
        );
    }

    return (
        <img
            src="logo.png"
            alt="Auto Bombas - Especialistas em Injeção Eletrônica"
            aria-label="Auto Bombas Logo"
            className={`${className} object-contain hover:scale-105 transition-transform`}
            onError={() => setImgError(true)}
        />
    );
};

export default Logo;
