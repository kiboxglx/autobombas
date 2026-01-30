import React from 'react';
import { Gauge, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

const Comparison = () => {
    return (
        <section className="py-20 bg-slate-900 border-y border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold mb-6">
                            <Gauge size={14} /> Tecnologia de Ponta
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Diagnóstico por Scanner: <br />
                            <span className="text-slate-400">Sem "Achismos".</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Muitos mecânicos trocam peças sem testar. Na Auto Bombas, usamos scanners de última geração para identificar o erro exato na central eletrônica do seu carro antes de colocar a mão na massa.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle className="text-cyan-500" size={20} /> Economia de peças desnecessárias
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle className="text-cyan-500" size={20} /> Resolução definitiva do problema
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle className="text-cyan-500" size={20} /> Limpeza de bicos ultrassônica
                            </li>
                        </ul>
                        <a href="#localizacao" className="text-amber-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            Agendar Diagnóstico <ArrowRight size={20} />
                        </a>
                    </div>

                    {/* Visual Comparison Card */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-amber-500 rounded-2xl opacity-20 blur-2xl"></div>
                        <div className="relative bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-2xl">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider text-center">Antes (Erro)</p>
                                    <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center border border-red-900/30 relative overflow-hidden group">
                                        <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80" alt="Painel com luz de injeção acesa" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all" />
                                        <AlertTriangle className="text-red-500 relative z-10 w-12 h-12 animate-pulse" />
                                    </div>
                                    <p className="text-xs text-center text-slate-500">Luz de Injeção Acesa</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider text-center">Depois (Solução)</p>
                                    <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center border border-emerald-900/30 relative overflow-hidden group">
                                        <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80" alt="Scanner Automotivo mostrando sistema ok" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all" />
                                        <CheckCircle className="text-emerald-500 relative z-10 w-12 h-12" />
                                    </div>
                                    <p className="text-xs text-center text-slate-500">Sistema Regularizado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
