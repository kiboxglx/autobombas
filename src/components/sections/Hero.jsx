import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import QuickQuoteForm from '../ui/QuickQuoteForm';

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
        }
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay loop muted playsInline
                    poster="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80"
                    className="w-full h-full object-cover opacity-40 scale-105"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-mechanic-checking-car-engine-4059-large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="max-w-3xl flex-1">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-md mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                            <span className="text-slate-200 text-xs md:text-sm font-semibold tracking-wide uppercase">Socorro Mecânico em Montes Claros</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6 tracking-tighter"
                        >
                            PROBLEMA NA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">INJEÇÃO?</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed"
                        >
                            Seu carro parou ou está falhando? Nós vamos até você. Especialistas em <strong className="text-white font-medium">Bomba de Combustível</strong> e diagnósticos precisos.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="https://wa.me/5538999999999"
                                className="group bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/20"
                            >
                                <MessageCircle className="text-slate-900 group-hover:scale-110 transition-transform" />
                                Chamar Técnico Agora
                            </a>
                            <button
                                onClick={() => scrollToSection('servicos')}
                                className="px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 text-white border border-white/10 hover:bg-white/5 backdrop-blur-sm transition-all"
                            >
                                Ver Serviços
                            </button>
                        </motion.div>
                    </div>

                    {/* Form Showcased on Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="hidden lg:block w-full max-w-md"
                    >
                        <QuickQuoteForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
