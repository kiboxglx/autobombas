import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Location = () => {
    return (
        <section id="localizacao" className="relative py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 flex flex-col lg:flex-row shadow-2xl">
                    {/* Contact Info */}
                    <div className="lg:w-1/2 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Visite a Oficina</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0 border border-slate-800">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Endereço</h4>
                                    <p className="text-slate-400 text-sm">Av. Gov. Magalhães Pinto, 1612<br />Vera Cruz, Montes Claros - MG</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0 border border-slate-800">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Horário</h4>
                                    <p className="text-slate-400 text-sm">Seg - Sex: 08h às 18h<br />Sábado: 08h às 12h</p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <a href="https://wa.me/5538999999999" className="block w-full bg-amber-500 hover:bg-amber-400 text-slate-900 text-center font-bold py-4 rounded-xl transition-colors shadow-lg shadow-amber-900/20">
                                    Chamar no WhatsApp
                                </a>
                                <p className="text-center text-slate-500 text-xs mt-3">Resposta média: 5 minutos</p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="lg:w-1/2 h-80 lg:h-auto bg-slate-800 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.378936647975!2d-43.86650000000000!3d-16.717000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQzJzAxLjIiUyA0M8KwNTEnNTEuMCJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            title="Mapa de Localização"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
