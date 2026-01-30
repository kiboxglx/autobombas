import React, { useState } from 'react';
import { Zap, ArrowRight } from 'lucide-react';

// Formulário de Orçamento Rápido
const QuickQuoteForm = () => {
    const [formState, setFormState] = useState({ name: '', car: '', problem: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redireciona para o WhatsApp com a mensagem pré-preenchida
        const msg = `Olá! Me chamo ${formState.name}. Tenho um ${formState.car} e estou com o seguinte problema: ${formState.problem}. Gostaria de um orçamento.`;
        window.open(`https://wa.me/5538999999999?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>

            <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 p-2 rounded-lg text-slate-900">
                    <Zap size={24} fill="currentColor" />
                </div>
                <div>
                    <h3 className="text-white font-bold text-xl">Orçamento Rápido</h3>
                    <p className="text-slate-400 text-xs">Resposta em até 5 minutos</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-slate-400 text-xs uppercase font-bold ml-1">Seu Nome</label>
                    <input
                        type="text"
                        placeholder="Ex: João Silva"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-600"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                </div>
                <div>
                    <label className="text-slate-400 text-xs uppercase font-bold ml-1">Carro / Ano</label>
                    <input
                        type="text"
                        placeholder="Ex: Gol G5 2012"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-600"
                        required
                        value={formState.car}
                        onChange={e => setFormState({ ...formState, car: e.target.value })}
                    />
                </div>
                <div>
                    <label className="text-slate-400 text-xs uppercase font-bold ml-1">O Problema</label>
                    <textarea
                        placeholder="Ex: O carro não pega de manhã..."
                        rows="2"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-600 resize-none"
                        value={formState.problem}
                        onChange={e => setFormState({ ...formState, problem: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/20">
                    Enviar no WhatsApp <ArrowRight size={18} />
                </button>
            </form>
        </div>
    );
};

export default QuickQuoteForm;
