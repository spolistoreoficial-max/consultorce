import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      role: "Consultor de Proteção Veicular",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Desde que comecei a usar o Orion, minhas vendas aumentaram 180%. Agora tenho resposta para qualquer objeção e meus clientes ficam impressionados com meu conhecimento. É como ter um especialista comigo 24h.",
      rating: 5
    },
    {
      name: "Marina Costa",
      location: "Rio de Janeiro, RJ", 
      role: "Consultora Senior",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "O Orion mudou minha carreira! Antes eu perdia muitas vendas por não saber responder certas perguntas. Agora sou referência na minha equipe e já batí a meta dos últimos 3 meses seguidos.",
      rating: 5
    },
    {
      name: "Roberto Santos",
      location: "Belo Horizonte, MG",
      role: "Gerente de Vendas",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Implementei o Orion para toda minha equipe e os resultados foram extraordinários. 40% de aumento nas conversões no primeiro mês. A IA realmente entende do negócio e dá respostas precisas.",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      location: "Brasília, DF",
      role: "Consultora Independente",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "O Orion revolucionou minha organização! Antes eu perdia leads por falta de follow-up. Agora tenho uma rotina estruturada e nunca mais esqueci de um cliente. Minha produtividade triplicou!",
      rating: 5
    },
    {
      name: "Diego Oliveira",
      location: "Curitiba, PR",
      role: "Consultor Pleno",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "Sempre travava nas objeções mais difíceis. Com o Orion, tenho script para tudo! 'Muito caro', 'vou pensar', 'já tenho seguro'... Para cada situação ele me dá a resposta perfeita. Virei especialista!",
      rating: 5
    },
    {
      name: "Juliana Ferreira",
      location: "Salvador, BA", 
      role: "Gerente Regional",
      avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      text: "O que mais me impressiona é como o Orion aprende comigo. Quanto mais uso, melhores ficam as respostas. É como ter um mentor que evolui junto comigo. Indispensável para qualquer consultor sério!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-4 bg-[#0f1419]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            O que dizem nossos <span className="text-[#00e676]">consultores</span>
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] px-4">
            Resultados reais de quem já usa o Orion
            <br />
            <span className="text-[#00e676] font-semibold">🔥 Mais de 239 consultores já usam o Orion!</span>
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-[#1d2233] rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-700/50 relative overflow-hidden mx-4">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e676]/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#ffe066] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base md:text-lg lg:text-xl text-center mb-6 md:mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-[#00e676]"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-[#00e676] text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#a0aec0] text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-[#a0aec0] text-xs">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-[#1d2233] rounded-full flex items-center justify-center border border-gray-700/50 hover:border-[#00e676]/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-[#00e676]" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#00e676] scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-[#1d2233] rounded-full flex items-center justify-center border border-gray-700/50 hover:border-[#00e676]/50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-[#00e676]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;