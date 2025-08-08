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
      window.fbq('track', 'Purchase', {
        value: 482.40,
        currency: 'BRL',
        content_name: 'Orion - Consultor de IA',
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
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-[#00e676]">Parabéns!</span>
          <br />
          <span className="text-[#21a1ff]">Compra realizada</span>
          <br />
          <span className="text-[#ffe066]">com sucesso! 🎉</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#a0aec0] mb-8 leading-relaxed">
          Agora você tem acesso ao <strong className="text-[#00e676]">Orion</strong>, 
          seu consultor de IA especializado em proteção veicular!
        </p>

        {/* Next Steps */}
        <div className="bg-[#1d2233] rounded-3xl p-8 border border-[#00e676]/20 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#00e676]">
            Próximo passo: Ativar seu acesso
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center space-x-3 text-lg">
              <div className="w-8 h-8 bg-[#00e676] rounded-full flex items-center justify-center text-[#15192c] font-bold">1</div>
              <span>Clique no botão abaixo</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-lg">
              <div className="w-8 h-8 bg-[#21a1ff] rounded-full flex items-center justify-center text-white font-bold">2</div>
              <span>Envie a mensagem no WhatsApp</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-lg">
              <div className="w-8 h-8 bg-[#ffe066] rounded-full flex items-center justify-center text-[#15192c] font-bold">3</div>
              <span>Receba suas credenciais de acesso</span>
            </div>
          </div>

          {/* Countdown */}
          {!redirected && countdown > 0 && (
            <div className="bg-[#00e676]/10 rounded-2xl p-4 mb-6 border border-[#00e676]/30">
              <div className="flex items-center justify-center space-x-2 text-[#00e676]">
                <Clock className="w-5 h-5" />
                <span className="font-bold">
                  Redirecionamento automático em {countdown} segundos...
                </span>
              </div>
            </div>
          )}

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25d366] hover:bg-[#22c55e] text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Ativar Acesso no WhatsApp</span>
          </button>

          <p className="text-sm text-[#a0aec0] mt-4">
            Mensagem que será enviada: <br />
            <em className="text-[#00e676]">"{whatsappMessage}"</em>
          </p>
        </div>

        {/* Additional Info */}
        <div className="bg-[#1d2233] rounded-2xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold mb-4 text-[#21a1ff]">
            O que você vai receber:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0" />
              <span className="text-sm">Link de acesso ao Orion</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0" />
              <span className="text-sm">Credenciais de login</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0" />
              <span className="text-sm">Tutorial de primeiros passos</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0" />
              <span className="text-sm">Suporte técnico prioritário</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-[#a0aec0] mt-8">
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