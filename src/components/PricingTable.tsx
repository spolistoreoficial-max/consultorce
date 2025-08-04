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
    <section id="pricing" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Escolha seu <span className="text-[#00e676]">plano</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed">
            Invista em sua carreira e tenha um consultor de IA ao seu lado
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <div className="flex-1 bg-[#20263a] rounded-3xl p-8 md:p-10 border-2 border-gray-600/40 hover:border-[#00e676]/60 transition-all duration-500 relative shadow-2xl hover:shadow-[#00e676]/20">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-[#00e676]/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Star className="w-10 h-10 text-[#00e676]" strokeWidth={2} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#f3f3f8]">Plano Mensal</h3>
            </div>

            <div className="text-center mb-10">
              <div className="mb-4">
                <span className="text-xl text-[#a0aec0] line-through font-medium">De R$ 397,00</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-[#f3f3f8] mb-3">
                R$ 67,00
              </div>
              <div className="text-xl text-[#a0aec0] font-medium">/mês</div>
            </div>

            <div className="space-y-5 mb-10">
              {monthlyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-7 h-7 bg-[#00e676] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="w-4 h-4 text-[#15192c]" strokeWidth={3} />
                  </div>
                  <span className="text-[#f3f3f8] text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleBuyClick('https://pay.kiwify.com.br/bReuhAT')}
              className="w-full bg-[#00e676] hover:bg-[#00d665] text-[#15192c] py-5 md:py-6 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              Assinar Agora 🚀
            </button>

            <p className="text-center text-base text-[#a0aec0] mt-6 font-medium">
              🟢 7 dias de garantia. Experimente sem risco!
            </p>
          </div>

          {/* Annual Plan - Most Popular */}
          <div className="flex-1 bg-gradient-to-br from-[#00e676] to-[#21a1ff] rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-500 relative transform hover:scale-105 shadow-2xl">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-[#ffe066] text-[#15192c] px-8 py-3 rounded-full font-bold text-base flex items-center space-x-2 shadow-xl border-2 border-white/20">
                <Star className="w-5 h-5 fill-current" />
                <span>MAIS POPULAR</span>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="absolute -top-3 -right-3 z-10">
              <div className="bg-[#ffe066] text-[#15192c] px-5 py-3 rounded-full font-bold text-sm flex items-center space-x-2 shadow-xl border-2 border-white/20">
                <Gift className="w-4 h-4" />
                <span>33% OFF + 4 meses grátis</span>
              </div>
            </div>

            <div className="text-center mb-10 mt-6">
              <div className="w-20 h-20 bg-white/25 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg backdrop-blur-sm">
                <Crown className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Plano Anual</h3>
            </div>

            <div className="text-center mb-10">
              <div className="mb-4">
                <span className="text-xl text-white/80 line-through font-medium">De R$ 4.764,00</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                R$ 482,40
              </div>
              <div className="text-xl text-white/90 font-medium mb-2">/ano</div>
              <div className="text-white/90 font-bold text-lg bg-white/20 rounded-full px-4 py-2 inline-block backdrop-blur-sm">
                Apenas R$ 40,20/mês
              </div>
            </div>

            <div className="space-y-5 mb-10">
              {annualFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="w-4 h-4 text-[#00e676]" strokeWidth={3} />
                  </div>
                  <span className="text-white text-lg font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleBuyClick('https://pay.kiwify.com.br/Kt22F7e')}
              className="w-full bg-[#1d2233] hover:bg-[#15192c] text-white py-5 md:py-6 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              Assinar Agora 🚀
            </button>

            <p className="text-center text-base text-white/90 mt-6 font-medium">
              🟢 7 dias de garantia. Experimente sem risco!
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-[#a0aec0] mb-6 font-medium">
            🔒 <strong className="text-[#00e676]">Pagamento 100% seguro</strong> via Kiwify
          </p>
          <p className="text-lg text-[#a0aec0]">
            Aceitamos PIX, cartão de crédito e boleto bancário
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;