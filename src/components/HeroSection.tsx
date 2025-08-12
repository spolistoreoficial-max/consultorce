import React from 'react';
import { Bot, Zap, Clock, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const scrollToWhatsAppRoll = () => {
    const element = document.getElementById('whatsapp-demo');
    if (element) {
      const viewportHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const navbarHeight = 64; // altura real da navbar
      
      // Calcula posição para centralizar o elemento no viewport
      const elementTop = element.offsetTop;
      const centerOffset = (viewportHeight - elementHeight) / 2;
      const scrollPosition = elementTop - centerOffset - navbarHeight;
      
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00e676] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#21a1ff] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#ffe066] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-[#00e676] to-[#21a1ff] rounded-2xl flex items-center justify-center shadow-2xl">
              <Bot className="w-10 h-10 text-[#15192c]" strokeWidth={2.5} />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#ffe066] rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-[#15192c]" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-[#00e676]">Orion:</span>
          <span className="block text-[#f3f3f8] mt-1 md:mt-2">O Consultor Expert que te ajuda a</span>
          <span className="block text-[#21a1ff] mt-1 md:mt-2">fechar mais vendas</span>
          <span className="block text-[#ffe066] mt-1 md:mt-2">24 horas por dia.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-[#a0aec0] mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Tenha um <strong className="text-[#00e676]">especialista de IA</strong> direto no seu WhatsApp para quebrar objeções, 
          criar scripts, organizar sua rotina e <strong className="text-[#21a1ff]">bater metas</strong> em proteção veicular.
          <br />
          <span className="text-[#ffe066] font-semibold">✨ Sem instalar nada - funciona direto no seu WhatsApp!</span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          <div className="bg-[#1d2233] rounded-2xl p-6 border border-[#00e676]/20">
            <Clock className="w-8 h-8 text-[#00e676] mb-3 mx-auto" />
            <div className="text-lg md:text-2xl font-bold text-[#00e676]">24/7</div>
            <div className="text-xs md:text-sm text-[#a0aec0]">Disponível sempre</div>
          </div>
          <div className="bg-[#1d2233] rounded-2xl p-6 border border-[#21a1ff]/20">
            <TrendingUp className="w-8 h-8 text-[#21a1ff] mb-3 mx-auto" />
            <div className="text-base md:text-xl font-bold text-[#21a1ff] text-center">+300%</div>
            <div className="text-xs md:text-sm text-[#a0aec0] mt-1">Mais conversões</div>
          </div>
          <div className="bg-[#1d2233] rounded-2xl p-6 border border-[#ffe066]/20">
            <Bot className="w-8 h-8 text-[#ffe066] mb-3 mx-auto" />
            <div className="text-lg md:text-2xl font-bold text-[#ffe066]">IA</div>
            <div className="text-xs md:text-sm text-[#a0aec0]">Inteligência avançada</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center perspective-1000">
          <button
            onClick={scrollToWhatsAppRoll}
            className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#ff5722] hover:to-[#ff9800] text-white px-8 md:px-12 py-4 md:py-4 rounded-2xl text-lg md:text-xl font-bold shadow-2xl hover:shadow-[#ff6b35]/25 hover:scale-110 transition-all duration-300 transform hover:translateZ-4 animate-gentle-bounce border-2 border-[#ff6b35]/50"
          >
            <span className="flex items-center space-x-2">
              <span>🔥 Ver Orion em Ação</span>
              <span>🚀</span>
            </span>
          </button>
        </div>

        <p className="text-sm text-[#a0aec0] mt-4 px-4">
          ⭐ Garantia de 7 dias • Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default HeroSection;