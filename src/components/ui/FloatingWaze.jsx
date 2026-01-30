import React from 'react';
import { Navigation } from 'lucide-react';

const FloatingWaze = () => {
    return (
        <a
            href="https://waze.com/ul?ll=-16.717,-43.864&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex fixed bottom-8 left-8 z-40 bg-blue-500 hover:bg-blue-400 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 items-center justify-center"
            title="Ir com Waze"
        >
            <Navigation size={24} fill="currentColor" />
        </a>
    );
};

export default FloatingWaze;
