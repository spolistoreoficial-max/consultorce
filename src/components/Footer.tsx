import React from 'react';
import { MessageCircle, Bot, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#00e676]/10 to-[#21a1ff]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-[#1d2233] rounded-3xl p-12 border border-[#00e676]/20">
            <Bot className="w-16 h-16 text-[#00e676] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para <span className="text-[#00e676]">vender mais</span> com IA?
            </h2>
            <p className="text-xl text-[#a0aec0] mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de consultores que já aumentaram suas vendas com o Orion
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://pay.kiwify.com.br/Kt22F7e"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#00e676] to-[#21a1ff] text-[#15192c] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                🚀 Começar Agora - Plano Anual
              </a>
              
              <a
                href={`https://wa.me/5511986131110?text=${encodeURIComponent("Vim do Site do Orion e gostaria de tirar algumas dúvidas")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] hover:bg-[#22c55e] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300"
              >
                💬 Tirar Dúvidas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#0f1419] border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00e676] to-[#21a1ff] rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#15192c]" />
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#00e676]">
                Dúvidas? Fale direto conosco!
              </h3>
              {(() => {
                const whatsappMessage = "Vim do Site do Orion e gostaria de tirar algumas dúvidas";
                const whatsappUrl = `https://wa.me/5511986131110?text=${encodeURIComponent(whatsappMessage)}`;
                return (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-[#25d366] hover:bg-[#22c55e] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>
                );
              })()}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 pt-8">
              <p className="text-[#a0aec0] mb-4">
                © 2025 Orion AI. Todos os direitos reservados.
              </p>
              <p className="text-sm text-[#a0aec0] flex items-center justify-center space-x-1">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>para consultores de proteção veicular</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/5511986131110?text=${encodeURIComponent("Vim do Site do Orion e gostaria de tirar algumas dúvidas")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25d366] hover:bg-[#22c55e] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </>
  );
};

export default Footer;