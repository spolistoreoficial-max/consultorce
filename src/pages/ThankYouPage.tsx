import React, { useEffect, useState } from 'react';
import { CheckCircle, MessageCircle, Bot, Clock } from 'lucide-react';

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [redirected, setRedirected] = useState(false);

  const whatsappMessage = "Oi! Acabei de comprar o Orion e quero ativar meu acesso";
  const whatsappUrl = `https://wa.me/5511986131110?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    // Facebook Pixel - Purchase Event
    if (typeof window !== 'undefined' && window.fbq) {
      // Detectar qual plano foi comprado baseado no referrer ou URL params
      const urlParams = new URLSearchParams(window.location.search);
      const referrer = document.referrer;
      
      // Verificar se veio do plano mensal ou anual
      const isMonthlyPlan = referrer.includes('bReuhAT') || urlParams.get('plan') === 'monthly';
      const isAnnualPlan = referrer.includes('Kt22F7e') || urlParams.get('plan') === 'annual';
      
      let purchaseValue = 482.40; // Default anual
      let planName = 'Orion - Plano Anual';
      
      if (isMonthlyPlan) {
        purchaseValue = 67.00;
        planName = 'Orion - Plano Mensal';
      }
      
      window.fbq('track', 'Purchase', {
        value: purchaseValue,
        currency: 'BRL',
        content_name: planName,
        content_category: 'Software'
      });
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1 && !redirected) {
          setRedirected(true);
          window.open(whatsappUrl, '_blank');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [whatsappUrl, redirected]);

  const handleWhatsAppClick = () => {
    setRedirected(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#15192c] via-[#1a1f35] to-[#232e47] text-[#f3f3f8] flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00e676] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#21a1ff] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#ffe066] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-2xl text-center relative z-10">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-[#00e676] to-[#21a1ff] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#ffe066] rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-[#15192c]" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
          <span className="text-[#00e676]">Parabéns!</span>
          <br />
          <span className="text-[#21a1ff]">Compra realizada</span>
          <br />
          <span className="text-[#ffe066]">com sucesso! 🎉</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-[#a0aec0] mb-6 md:mb-8 leading-relaxed px-4">
          Agora você vai adicionar o <strong className="text-[#00e676]">Orion</strong> direto no seu WhatsApp!
          <br />
          <span className="text-sm text-[#ffe066]">✨ Sem instalar nada - só adicionar como contato</span>
        </p>

        {/* Next Steps */}
        <div className="bg-[#1d2233] rounded-3xl p-6 md:p-8 border border-[#00e676]/20 mb-6 md:mb-8 mx-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#00e676]">
            Próximo passo: Adicionar Orion no WhatsApp
          </h2>
          
          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            <div className="flex items-center justify-center space-x-3 text-sm md:text-base lg:text-lg">
              <div className="w-8 h-8 bg-[#00e676] rounded-full flex items-center justify-center text-[#15192c] font-bold">1</div>
              <span>Clique no botão abaixo</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm md:text-base lg:text-lg">
              <div className="w-8 h-8 bg-[#21a1ff] rounded-full flex items-center justify-center text-white font-bold">2</div>
              <span>Receba o contato do Orion</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm md:text-base lg:text-lg">
              <div className="w-8 h-8 bg-[#ffe066] rounded-full flex items-center justify-center text-[#15192c] font-bold">3</div>
              <span>Adicione como contato e comece a usar</span>
            </div>
          </div>

          {/* Countdown */}
          {!redirected && countdown > 0 && (
            <div className="bg-[#00e676]/10 rounded-2xl p-3 md:p-4 mb-4 md:mb-6 border border-[#00e676]/30">
              <div className="flex items-center justify-center space-x-2 text-[#00e676]">
                <Clock className="w-5 h-5" />
                <span className="font-bold text-sm md:text-base">
                  Redirecionamento automático em {countdown} segundos...
                </span>
              </div>
            </div>
          )}

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25d366] hover:bg-[#22c55e] text-white py-3 md:py-4 px-6 md:px-8 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 md:space-x-3"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>Receber Contato do Orion</span>
          </button>

          <p className="text-xs md:text-sm text-[#a0aec0] mt-3 md:mt-4">
            Mensagem que será enviada: <br />
            <em className="text-[#00e676]">"{whatsappMessage}"</em>
          </p>
        </div>

        {/* Additional Info */}
        <div className="bg-[#1d2233] rounded-2xl p-4 md:p-6 border border-gray-700/50 mx-4">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#21a1ff]">
            O que você vai receber:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0" />
              <span className="text-xs md:text-sm">Número do Orion para adicionar</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0" />
              <span className="text-xs md:text-sm">Instruções de como adicionar</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0" />
              <span className="text-xs md:text-sm">Tutorial de primeiros passos</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0" />
              <span className="text-xs md:text-sm">Suporte técnico prioritário</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs md:text-sm text-[#a0aec0] mt-6 md:mt-8 px-4 text-center">
          Dúvidas? Entre em contato conosco pelo WhatsApp: 
          <a href={`https://wa.me/5511986131110?text=${encodeURIComponent("Vim do Site do Orion e gostaria de tirar algumas dúvidas")}`} className="text-[#25d366] hover:underline ml-1">
            +55 11 98613-1110
          </a>
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;