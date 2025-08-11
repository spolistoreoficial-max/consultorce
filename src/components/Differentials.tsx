import React from 'react';
import { MessageSquare, Clock, TrendingUp, BarChart3, Users, Shield } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: MessageSquare,
      title: "IA responde dúvidas e cria scripts",
      description: "Tenha respostas prontas para qualquer objeção e scripts personalizados para cada situação de venda.",
      color: "#00e676"
    },
    {
      icon: Clock,
      title: "Disponível 24h no seu WhatsApp",
      description: "Orion nunca dorme. Acesse via WhatsApp, web ou app, a qualquer hora do dia ou da noite.",
      color: "#21a1ff"
    },
    {
      icon: TrendingUp,
      title: "Ajuda a quebrar objeções e vender mais",
      description: "Estratégias comprovadas para superar resistências e fechar mais vendas com confiança.",
      color: "#ffe066"
    },
    {
      icon: BarChart3,
      title: "Rotina de acompanhamento e cálculos prontos",
      description: "Organize sua agenda, crie planos de ação e tenha cálculos de conversão sempre à mão.",
      color: "#00e676"
    },
    {
      icon: Users,
      title: "Evolui com o seu uso",
      description: "Quanto mais você usa, mais inteligente fica. Aprende com suas vendas e melhora constantemente.",
      color: "#21a1ff"
    },
    {
      icon: Shield,
      title: "Suporte especializado em proteção veicular",
      description: "Conhecimento específico do setor e particularidades do mercado de proteção.",
      color: "#ffe066"
    }
  ];


  return (
    <section id="differentials" className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Differentials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            Por que <span className="text-[#00e676]">Orion</span> é diferente?
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] max-w-2xl mx-auto px-4">
            Uma IA especializada em <span className="text-[#21a1ff]">proteção veicular</span> que realmente entende seu negócio
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
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
            ⭐ 7 dias de garantia • Cancele quando quiser
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 px-4">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="bg-[#1d2233] rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-[#00e676]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto" style={{backgroundColor: `${diff.color}20`}}>
                <diff.icon className="w-8 h-8" style={{color: diff.color}} strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-center" style={{color: diff.color}}>
                {diff.title}
              </h3>
              <p className="text-sm md:text-base text-[#a0aec0] leading-relaxed text-center">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;