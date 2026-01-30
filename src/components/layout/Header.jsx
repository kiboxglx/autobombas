import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`fixed w-full z-40 transition-all duration-300 border-b ${scrolled
                        ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3 shadow-lg'
                        : 'bg-transparent border-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <Logo className="h-14" />
                    </div>

                    <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
                        {['Serviços', 'Sobre', 'Depoimentos'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                                className="hover:text-amber-500 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                            </button>
                        ))}
                        <a
                            href="https://wa.me/5538999999999"
                            className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center gap-2 transform hover:-translate-y-0.5"
                        >
                            Agendar Agora
                            <ChevronRight size={16} />
                        </a>
                    </div>

                    <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* --- MOBILE FULLSCREEN MENU --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl"
                    >
                        <div className="flex justify-end p-6">
                            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 bg-slate-800 rounded-full">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center h-[70vh] gap-8 text-2xl font-bold text-white">
                            <button onClick={() => scrollToSection('servicos')} className="hover:text-amber-500 transition-colors">Nossos Serviços</button>
                            <button onClick={() => scrollToSection('sobre')} className="hover:text-amber-500 transition-colors">A Oficina</button>
                            <button onClick={() => scrollToSection('localizacao')} className="hover:text-amber-500 transition-colors">Como Chegar</button>
                            <div className="w-16 h-1 bg-cyan-500 rounded-full my-4"></div>
                            <p className="text-sm font-normal text-slate-400 text-center px-8">Av. Gov. Magalhães Pinto, 1612 <br /> Montes Claros - MG</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
