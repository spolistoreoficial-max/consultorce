import React from 'react';
import { CheckCircle } from 'lucide-react';

const ForWhom = () => {
  const forWhom = [
    "Consultores que querem alta performance",
    "Quem cansa de perder vendas por falta de resposta",
    "Quem quer quebrar objeções sem decorar detalhes",
    "Quem busca autonomia e evolução com IA"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
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

export default ForWhom;