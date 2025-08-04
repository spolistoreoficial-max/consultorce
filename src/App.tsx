import React from 'react';
import HeroSection from './components/HeroSection';
import Differentials from './components/Differentials';
import WhatsAppRoll from './components/WhatsAppRoll';
import PricingTable from './components/PricingTable';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#15192c] via-[#1a1f35] to-[#232e47] text-[#f3f3f8]">
      <HeroSection />
      <Differentials />
      <WhatsAppRoll />
      <PricingTable />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;