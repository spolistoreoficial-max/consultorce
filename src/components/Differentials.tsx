import React from 'react';
import { MessageSquare, Clock, TrendingUp, BarChart3, Users, CheckCircle } from 'lucide-react';

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
      title: "Evolui com seu time",
      description: "Quanto mais você usa, mais inteligente fica. Aprende com suas vendas e melhora constantemente.",
      color: "#21a1ff"
    }
  ];

  const forWhom = [
    "Consultores que querem alta performance",
    "Quem cansa de perder vendas por falta de resposta",
    "Quem quer quebrar objeções sem decorar detalhes",
    "Quem busca autonomia e evolução com IA"
  ];

  return (
    <section id="differentials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Differentials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que <span className="text-[#00e676]">Orion</span> é diferente?
          </h2>
          <p className="text-xl text-[#a0aec0] max-w-2xl mx-auto">
            Uma IA especializada em proteção veicular que realmente entende seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="bg-[#1d2233] rounded-2xl p-8 border border-gray-700/50 hover:border-[#00e676]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto" style={{backgroundColor: `${diff.color}20`}}>
                <diff.icon className="w-8 h-8" style={{color: diff.color}} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center" style={{color: diff.color}}>
                {diff.title}
              </h3>
              <p className="text-[#a0aec0] leading-relaxed text-center">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* For Whom */}
        <div className="bg-[#1d2233] rounded-3xl p-8 md:p-12 border border-[#00e676]/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="text-[#21a1ff]">Para quem</span> é o Orion?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {forWhom.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-[#15192c] rounded-xl p-6">
                <CheckCircle className="w-6 h-6 text-[#00e676] flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;