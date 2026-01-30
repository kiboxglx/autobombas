import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import BrandsMarquee from './components/ui/BrandsMarquee';
import Services from './components/sections/Services';
import Comparison from './components/sections/Comparison';
import Features from './components/sections/Features';
import Location from './components/sections/Location';
import StickyBottomBar from './components/ui/StickyBottomBar';
import FloatingWaze from './components/ui/FloatingWaze';

const App = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AutoRepairShop",
    "name": "Auto Bombas",
    "description": "Especialistas em Bomba de Combustível e Injeção Eletrônica em Montes Claros.",
    "telephone": "+5538999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Gov. Magalhães Pinto, 1612",
      "addressLocality": "Montes Claros",
      "addressRegion": "MG",
      "postalCode": "39400-000",
      "addressCountry": "BR"
    },
    "priceRange": "$$"
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 overflow-x-hidden">
      <Helmet>
        <title>Auto Bombas | Injeção Eletrônica e Socorro Mecânico em Montes Claros</title>
        <meta name="description" content="Carro parou? A Auto Bombas vai até você! Especialistas em Bomba de Combustível, Injeção Eletrônica e Limpeza de Bicos em Montes Claros - MG. Atendimento rápido." />
        <meta name="keywords" content="mecânico montes claros, injeção eletrônica, bomba de combustível, auto socorro, oficina mecânica vera cruz" />
        <link rel="canonical" href="https://www.autobombas.com.br" />

        {/* Open Graph */}
        <meta property="og:title" content="Auto Bombas - Socorro Mecânico Especializado" />
        <meta property="og:description" content="Problema na bomba de combustível? Nós vamos até onde seu carro parou. Clique e chame agora!" />
        <meta property="og:image" content="https://www.autobombas.com.br/imagem-de-compartilhamento.jpg" />
        <meta property="og:url" content="https://www.autobombas.com.br" />
        <meta property="og:type" content="website" />

        <meta name="theme-color" content="#06b6d4" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <StickyBottomBar />
      <FloatingWaze />
      <Header />

      <Hero />
      <BrandsMarquee />
      <Services />
      <Comparison />
      <Features />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
