import React from 'react';
import Logo from '../ui/Logo';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-16 pb-32 md:pb-16 border-t border-slate-900">
            <div className="container mx-auto px-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <Logo className="h-10 md:h-12" />
                        <p className="text-slate-500 text-sm mt-4">Referência em sistema de combustível em Montes Claros.</p>
                    </div>
                    <div className="flex gap-6 text-slate-400 text-sm font-medium">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Termos</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-900 text-slate-600 text-xs text-center">
                    &copy; {new Date().getFullYear()} Auto Bombas. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
