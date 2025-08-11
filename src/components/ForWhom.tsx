import React from 'react';
import { CheckCircle } from 'lucide-react';

const ForWhom = () => {
  const forWhom = [
    "Consultores que querem alta performance",
    "Quem está cansado de perder vendas por não saber o que responder na hora certa",
    "Quem quer quebrar objeções sem decorar detalhes",
    "Quem busca autonomia e evolução com IA",
    "Quem quer ter um assistente pessoal para vender com mais confiança",
    "Quem deseja se destacar da concorrência com conhecimento especializado"
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#1d2233] rounded-3xl p-8 md:p-12 border border-[#00e676]/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 px-4">
              <span className="text-[#21a1ff]">Para quem</span> é o Orion?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {forWhom.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 md:space-x-4 bg-[#15192c] rounded-xl p-4 md:p-6">
                <CheckCircle className="w-6 h-6 text-[#00e676] flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) {
                  const viewportHeight = window.innerHeight;
                  const elementHeight = element.offsetHeight;
                  const navbarHeight = 64;
                  const elementTop = element.offsetTop;
                  const centerOffset = (viewportHeight - elementHeight) / 2;
                  const scrollPosition = elementTop - centerOffset - navbarHeight;
                  window.scrollTo({
                    top: Math.max(0, scrollPosition),
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-gradient-to-r from-[#00e676] to-[#21a1ff] text-[#15192c] px-8 md:px-10 py-4 rounded-2xl text-lg md:text-xl font-bold shadow-2xl hover:shadow-[#00e676]/25 hover:scale-110 transition-all duration-300 transform"
            >
              Assinar Agora 🚀
            </button>
            <p className="text-sm text-[#a0aec0] mt-3">
              ⭐ Comece hoje mesmo a vender mais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;