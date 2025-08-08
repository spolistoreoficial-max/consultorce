import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Differentials from './components/Differentials';
import WhatsAppRoll from './components/WhatsAppRoll';
import PricingTable from './components/PricingTable';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/obrigado" element={<ThankYouPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-[#15192c] via-[#1a1f35] to-[#232e47] text-[#f3f3f8]">
            <Navbar />
            <HeroSection />
            <Differentials />
            <WhatsAppRoll />
            <Testimonials />
            <PricingTable />
            <FAQ />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;