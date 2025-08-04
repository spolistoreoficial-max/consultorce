import React from 'react';
import { Check, Star, Crown, Gift } from 'lucide-react';

const PricingTable = () => {
  const monthlyFeatures = [
    "Acesso completo ao Orion IA",
    "Scripts para todas objeções",
    "Suporte via WhatsApp",
    "Atualizações automáticas",
    "Garantia de 7 dias"
  ];

  const annualFeatures = [
    "Tudo do plano mensal",
    "Economia de R$ 3.281,60",
    "Acesso a novos recursos primeiro",
    "Descontos exclusivos em ferramentas de IA",
    "Material bônus exclusivo"
  ];

  const handleBuyClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            Escolha seu <span className="text-[#00e676]">plano</span>
          </h2>
          <p className="text-base md:text-lg text-[#a0aec0] max-w-2xl mx-auto leading-relaxed">
            Invista em sua carreira e tenha um consultor de IA ao seu lado
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-3xl mx-auto">
          {/* Monthly Plan */}
          <div className="flex-1 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-xl p-4 md:p-6 border-2 border-[#3b82f6]/50 hover:border-[#3b82f6]/80 transition-all duration-500 relative shadow-xl hover:shadow-[#3b82f6]/40 hover:transform hover:scale-[1.02]">
            <div className="text-center mb-4">
              <div className="w-10 h-10 bg-white/25 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg backdrop-blur-sm">
                <Star className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Plano Mensal</h3>
            </div>

            <div className="text-center mb-4">
              <div className="mb-2">
                <span className="text-sm text-white/80 line-through font-medium">De R$ 397,00</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                R$ 67,00
              </div>
              <div className="text-sm text-white/90 font-medium">/mês</div>
            </div>

            <div className="space-y-2 mb-4">
              {monthlyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="w-2.5 h-2.5 text-[#1e3a8a]" strokeWidth={3} />
                  </div>
                  <span className="text-white text-xs md:text-sm font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleBuyClick('https://pay.kiwify.com.br/bReuhAT')}
              className="w-full bg-[#1d2233] hover:bg-[#15192c] text-white py-2.5 md:py-3 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Assinar Agora 🚀
            </button>

            <p className="text-center text-xs text-white/90 mt-3 font-medium">
              🟢 7 dias de garantia. Experimente sem risco!
            </p>
          </div>

          {/* Annual Plan - Most Popular */}
          <div className="flex-1 bg-gradient-to-br from-[#00e676] to-[#21a1ff] rounded-xl p-4 md:p-6 hover:shadow-xl transition-all duration-500 relative transform hover:scale-105 shadow-xl">
            {/* Popular Badge */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-[#ffe066] text-[#15192c] px-3 py-1 rounded-full font-bold text-xs flex items-center space-x-1 shadow-lg border border-white/20">
                <Star className="w-3 h-3 fill-current" />
                <span>MAIS POPULAR</span>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="absolute -top-1 -right-1 z-10">
              <div className="bg-[#ffe066] text-[#15192c] px-2 py-1 rounded-full font-bold text-xs flex items-center space-x-1 shadow-lg border border-white/20">
                <Gift className="w-3 h-3" />
                <span>33% OFF</span>
              </div>
            </div>

            <div className="text-center mb-4 mt-3">
              <div className="w-10 h-10 bg-white/25 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg backdrop-blur-sm">
                <Crown className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Plano Anual</h3>
            </div>

            <div className="text-center mb-4">
              <div className="mb-2">
                <span className="text-sm text-white/80 line-through font-medium">De R$ 4.764,00</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                R$ 482,40
              </div>
              <div className="text-sm text-white/90 font-medium mb-1">/ano</div>
              <div className="text-white/90 font-bold text-xs bg-white/20 rounded-full px-2 py-1 inline-block backdrop-blur-sm">
                Apenas R$ 40,20/mês
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {annualFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="w-2.5 h-2.5 text-[#00e676]" strokeWidth={3} />
                  </div>
                  <span className="text-white text-xs md:text-sm font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleBuyClick('https://pay.kiwify.com.br/Kt22F7e')}
              className="w-full bg-[#1d2233] hover:bg-[#15192c] text-white py-2.5 md:py-3 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Assinar Agora 🚀
            </button>

            <p className="text-center text-xs text-white/90 mt-3 font-medium">
              🟢 7 dias de garantia. Experimente sem risco!
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-base text-[#a0aec0] mb-3 font-medium">
            🔒 <strong className="text-[#00e676]">Pagamento 100% seguro</strong> via Kiwify
          </p>
          <p className="text-sm text-[#a0aec0]">
            Aceitamos PIX e cartão de crédito
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;