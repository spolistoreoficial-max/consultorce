import React from 'react';
import { Check, Star, Crown, Gift, Clock, Eye } from 'lucide-react';

const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 0,
    minutes: 15,
    seconds: 0
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-500 text-white px-3 py-3 text-center mb-8 animate-pulse w-full">
      <div className="flex items-center justify-center space-x-2 mb-1">
        <Clock className="w-4 h-4" />
        <span className="font-bold text-sm">OFERTA EXPIRA EM:</span>
      </div>
      <div className="flex justify-center space-x-2 font-mono font-bold">
        <span className="bg-white text-red-500 px-2 py-1 rounded text-sm">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span>:</span>
        <span className="bg-white text-red-500 px-2 py-1 rounded text-sm">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span>:</span>
        <span className="bg-white text-red-500 px-2 py-1 rounded text-sm">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

const ViewerCounter = () => {
  const [viewers, setViewers] = React.useState(47);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(35, Math.min(65, newValue));
      });
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#00e676] text-[#15192c] px-3 py-2 rounded-lg text-center mb-4">
      <div className="flex items-center justify-center space-x-2">
        <Eye className="w-4 h-4" />
        <span className="font-bold text-sm">
          {viewers} pessoas visualizando agora
        </span>
      </div>
    </div>
  );
};


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
    <section id="pricing" className="py-6 md:py-12">
      {/* Full-width Urgency Timer */}
      <div className="w-full">
        <UrgencyTimer />
      </div>
      
      <div className="px-3 md:px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-3 leading-tight px-2">
            Escolha seu <span className="text-[#00e676]">plano de assinatura</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#a0aec0] max-w-2xl mx-auto leading-relaxed px-2">
            Invista em sua carreira e tenha um consultor de IA ao seu lado
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-5xl mx-auto px-2">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl mx-auto px-2">
          {/* Monthly Plan */}
          <div className="flex-1 bg-[#1d2233] rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-700/50 hover:border-[#00e676]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group relative max-w-md mx-auto lg:mx-0">
            {/* Discount Badge */}
            <div className="absolute -top-1 -right-1 z-10">
              <div className="bg-[#ffe066] text-[#15192c] px-2 py-1 rounded-full font-bold text-xs flex items-center space-x-1 shadow-lg border border-white/20">
                <Gift className="w-2.5 h-2.5 md:w-3 md:h-3" />
                <span>83% OFF</span>
              </div>
            </div>

            <div className="text-center mb-3 md:mb-4 mt-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#00e676]/20 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-[#00e676]" strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-1 md:mb-2 text-[#00e676]">Plano Mensal</h3>
            </div>

            <div className="text-center mb-3 md:mb-4">
              <div className="mb-1 md:mb-2">
                <span className="text-xs md:text-sm text-red-500 line-through font-medium">De R$ 397,00</span>
              </div>
              <div className="text-xl md:text-2xl lg:text-4xl font-bold text-[#f3f3f8] mb-1">
                R$ 67,00
              </div>
              <div className="text-xs md:text-sm text-[#a0aec0] font-medium">/mês</div>
            </div>

            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              {monthlyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-[#00e676] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#15192c]" strokeWidth={3} />
                  </div>
                  <span className="text-[#f3f3f8] text-xs md:text-sm lg:text-base font-semibold leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleBuyClick('https://pay.kiwify.com.br/bReuhAT')}
              className="w-full bg-[#00e676] hover:bg-[#00d865] text-[#15192c] py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base lg:text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              Assinar Agora 🚀
            </button>

            <p className="text-center text-xs md:text-sm text-[#a0aec0] mt-2 md:mt-3 font-medium">
              🟢 7 dias de garantia. Experimente sem risco!
            </p>

            <div className="bg-[#00e676]/10 rounded-lg p-2 md:p-3 mt-3 border border-[#00e676]/30">
              <p className="text-center text-xs md:text-sm font-bold text-[#00e676]">
                🔓 Sem Fidelidade: Cancele quando quiser!
              </p>
            </div>
          </div>

          {/* Annual Plan - Most Popular */}
          <div className="flex-1 bg-gradient-to-br from-[#00e676] to-[#21a1ff] rounded-2xl p-6 md:p-8 lg:p-10 hover:shadow-xl transition-all duration-500 relative transform hover:scale-105 shadow-xl max-w-md mx-auto lg:mx-0">
            {/* Popular Badge */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-[#ffe066] text-[#15192c] px-2 md:px-3 py-1 rounded-full font-bold text-xs flex items-center space-x-1 shadow-lg border border-white/20">
                <Star className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" />
                <span>ECONOMIZE 4 MESES</span>
              </div>
            </div>

            <div className="text-center mb-3 md:mb-4 mt-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/25 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg backdrop-blur-sm">
                <Crown className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-1 md:mb-2 text-white">Plano Anual</h3>
            </div>

            <div className="text-center mb-3 md:mb-4">
              <div className="mb-1 md:mb-2">
                <span className="text-xs md:text-sm text-red-400 line-through font-medium">De R$ 4.764,00</span>
              </div>
              <div className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-1">
                R$ 482,40
              </div>
              <div className="text-xs md:text-sm text-white/90 font-medium mb-1">/ano</div>
              <div className="text-white/90 font-bold text-xs md:text-sm bg-white/20 rounded-full px-2 py-1 inline-block backdrop-blur-sm mb-1">
                Apenas R$ 40,20/mês
              </div>
            </div>

            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              {annualFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#00e676]" strokeWidth={3} />
                  </div>
                  <span className="text-white text-xs md:text-sm lg:text-base font-semibold leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleBuyClick('https://pay.kiwify.com.br/Kt22F7e')}
              className="w-full bg-[#1d2233] hover:bg-[#15192c] text-white py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base lg:text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Assinar Agora 🚀
            </button>

            <p className="text-center text-xs md:text-sm text-white/90 mt-2 md:mt-3 font-medium">
              🟢 7 dias de garantia. Experimente sem risco!
            </p>

          </div>
        </div>
        </div>

        <div className="text-center mt-8 md:mt-12 px-2">
          <p className="text-xs md:text-sm lg:text-base text-[#a0aec0] mb-2 md:mb-3 font-medium">
            🔒 <strong className="text-[#00e676]">Pagamento 100% seguro</strong> via Kiwify
          </p>
          <p className="text-xs md:text-sm text-[#a0aec0]">
            Aceitamos PIX e cartão de crédito
          </p>
        </div>

      </div>
      </div>
    </section>
  );
};

export default PricingTable;