import React from 'react';
import { Bot, Zap, Clock, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const scrollToDifferentials = () => {
    const element = document.getElementById('differentials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        {/* Impact Phrase */}
        <div className="mb-8">
          <p className="text-2xl md:text-4xl lg:text-5xl text-[#ffe066] font-bold mb-6 drop-shadow-lg">
            Cansado de perder vendas na proteção veicular? Conheça o
          </p>
        </div>

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
          <span className="block text-[#f3f3f8] mt-2">O Consultor Expert que te ajuda a</span>
          <span className="block text-[#21a1ff] mt-2">fechar mais vendas</span>
          <span className="block text-[#ffe066] mt-2">24 horas por dia.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#a0aec0] mb-12 max-w-3xl mx-auto leading-relaxed">
          Tenha um <strong className="text-[#00e676]">especialista de IA</strong> ao seu lado para quebrar objeções, 
          criar scripts, organizar sua rotina e <strong className="text-[#21a1ff]">bater metas</strong> em proteção veicular.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="bg-[#1d2233] rounded-2xl p-6 border border-[#00e676]/20">
            <Clock className="w-8 h-8 text-[#00e676] mb-3 mx-auto" />
            <div className="text-2xl font-bold text-[#00e676]">24/7</div>
            <div className="text-sm text-[#a0aec0]">Disponível sempre</div>
          </div>
          <div className="bg-[#1d2233] rounded-2xl p-6 border border-[#21a1ff]/20">
            <TrendingUp className="w-8 h-8 text-[#21a1ff] mb-3 mx-auto" />
            <div className="text-2xl font-bold text-[#21a1ff]">+300%</div>
            <div className="text-sm text-[#a0aec0]">Mais conversões</div>
          </div>
          <div className="bg-[#1d2233] rounded-2xl p-6 border border-[#ffe066]/20">
            <Bot className="w-8 h-8 text-[#ffe066] mb-3 mx-auto" />
            <div className="text-2xl font-bold text-[#ffe066]">IA</div>
            <div className="text-sm text-[#a0aec0]">Inteligência avançada</div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToDifferentials}
          className="bg-gradient-to-r from-[#00e676] to-[#21a1ff] text-[#15192c] px-12 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-[#00e676]/25 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
        >
          Conheça Orion 🚀
        </button>

        <p className="text-sm text-[#a0aec0] mt-4">
          ⭐ Garantia de 7 dias • Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default HeroSection;