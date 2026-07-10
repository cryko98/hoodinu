import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import HowToBuy from './components/HowToBuy';
import PortfolioSim from './components/PortfolioSim';
import Tokenomics from './components/Tokenomics';
import NewsFeed from './components/NewsFeed';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import { CONTRACT_ADDRESS } from './data';

export default function App() {
  
  // Smooth scroll handler to navigate cleanly between different landing sections
  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Set page scroll restoration on fresh mount
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-robin-dark text-white font-sans selection:bg-robin-green selection:text-robin-dark overflow-x-hidden">
      
      {/* Top sticky customized Navigation header */}
      <Header onNavigate={handleNavigation} contractAddress={CONTRACT_ADDRESS} />

      {/* Main Sections stack */}
      <main>
        {/* Acid lime Hero banner mimicking the provided design reference */}
        <Hero contractAddress={CONTRACT_ADDRESS} />

        {/* Narrative back-lore segment */}
        <Story />

        {/* Interactive Step-by-Step Swap instruction coordinates */}
        <HowToBuy contractAddress={CONTRACT_ADDRESS} />

        {/* Dynamic portfolio graph and buy dashboard simulator */}
        <PortfolioSim />

        {/* Specifications specs & distribution table */}
        <Tokenomics />

        {/* Custom expandable cryptocurrency articles */}
        <NewsFeed />

        {/* Roadmap tracker for milestones and achievements */}
        <Roadmap />
      </main>

      {/* Structured footer with disclaimers and social redirects */}
      <Footer contractAddress={CONTRACT_ADDRESS} />

    </div>
  );
}
