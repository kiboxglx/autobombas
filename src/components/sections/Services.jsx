import React from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Navigation, Wrench, MapPin, ArrowRight } from 'lucide-react';
import QuickQuoteForm from '../ui/QuickQuoteForm';

const Services = () => {
    return (
        <section id="servicos" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2">Nossas Especialidades</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Soluções Completas <br />para seu Motor.</h3>
                    </div>

                    {/* Mobile Form Trigger (visible only on mobile if not in hero) */}
                    <div className="lg:hidden w-full">
                        <QuickQuoteForm />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <BatteryCharging />, title: "Troca de Bomba", desc: "Substituição rápida com peças Bosch originais." },
                        { icon: <Navigation />, title: "Injeção Eletrônica", desc: "Diagnóstico computadorizado para falhas no motor." },
                        { icon: <Wrench />, title: "Marcador de Nível", desc: "Conserto do sensor e painel de combustível." },
                        { icon: <MapPin />, title: "Socorro Móvel", desc: "Vamos até onde seu carro parou em toda a cidade." },
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/40 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors shadow-lg shadow-black/20">
                                {React.cloneElement(service.icon, { size: 28 })}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                            <div className="mt-6 flex items-center text-cyan-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                Saiba mais <ArrowRight size={16} className="ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
