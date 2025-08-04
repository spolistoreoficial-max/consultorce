import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso entender de IA para usar o Orion?",
      answer: "Não! O Orion foi desenvolvido para ser super simples. É só fazer perguntas em linguagem natural, como se estivesse conversando com um colega experiente. A interface é intuitiva e você pode usar pelo WhatsApp, web ou app."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, você pode cancelar a qualquer momento sem burocracias. Além disso, oferecemos 7 dias de garantia total. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
    },
    {
      question: "O Orion funciona realmente no WhatsApp?",
      answer: "Sim! Você pode conversar com o Orion diretamente pelo WhatsApp, além de acessar via web e app. É como ter um consultor especialista disponível 24h no seu celular."
    },
    {
      question: "Tem suporte para dúvidas e problemas?",
      answer: "Claro! Temos suporte técnico prioritário para todos os usuários. Nossa equipe está disponível para te ajudar via WhatsApp, e-mail e chat ao vivo. Você nunca fica sozinho."
    },
    {
      question: "O sistema atualiza sozinho com novas informações?",
      answer: "Sim! O Orion recebe atualizações automáticas constantemente. Novas estratégias de venda, respostas para objeções e melhorias na IA são adicionadas sem você precisar fazer nada."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Dúvidas <span className="text-[#21a1ff]">frequentes</span>
          </h2>
          <p className="text-xl text-[#a0aec0]">
            Esclarecemos as principais questões sobre o Orion
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1d2233] rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-[#21a1ff]/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#232938] transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#21a1ff]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#a0aec0]" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-700/30">
                    <p className="text-[#a0aec0] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-[#a0aec0] mb-4">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <a
            href="https://wa.me/5511986131110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#25d366] hover:bg-[#22c55e] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:transform hover:scale-105"
          >
            <span>💬 Conversar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;