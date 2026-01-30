import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
    return (
        <section id="sobre" className="py-24 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-cyan-900/10 to-slate-900 rounded-3xl p-8 md:p-16 border border-slate-800 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="flex-1 z-10">
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Por que a <span className="text-cyan-400">Auto Bombas?</span>
                        </h3>
                        <div className="space-y-6">
                            {[
                                { title: "Atendimento Especializado Frotas", desc: "Sua empresa não pode parar. Temos condições especiais para Vans e Caminhonetes." },
                                { title: "Rapidez no Atendimento", desc: "Sabemos que você precisa do carro. 90% dos serviços feitos no mesmo dia." },
                                { title: "Peças Originais", desc: "Trabalhamos com Bosch, Delphi e Magneti Marelli para garantir durabilidade." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                        <CheckCircle size={14} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
