import React from 'react';
import { motion } from 'framer-motion';

// Carrossel Infinito de Marcas
const BrandsMarquee = () => {
    const brands = ["FIAT", "VOLKSWAGEN", "CHEVROLET", "FORD", "TOYOTA", "HYUNDAI", "HONDA", "RENAULT", "JEEP", "NISSAN"];
    return (
        <div className="w-full bg-slate-900/50 border-y border-slate-800 overflow-hidden py-4">
            <div className="relative w-full flex">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...brands, ...brands, ...brands].map((brand, idx) => (
                        <span key={idx} className="text-slate-600 font-black text-xl md:text-2xl uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-cyan-500 transition-all cursor-default">
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BrandsMarquee;
