import React, { useState, useEffect } from 'react';
import { Bot, User } from 'lucide-react';

const WhatsAppRoll = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      id: 1,
      sender: 'user',
      text: 'Orion, o cliente achou caro. O que eu posso responder?',
      time: '14:30'
    },
    {
      id: 2,
      sender: 'orion',
      text: 'Pode responder o seguinte: Entendo! Mas qual seria o impacto financeiro no seu bolso se hoje você batesse seu veículo? Pode custar de 10 a 50 mil dependendo da situação. O investimento na proteção é justamente para você economizar milhares de reais quando mais precisar.',
      time: '14:31'
    },
    {
      id: 3,
      sender: 'user',
      text: 'Perfeito, bem melhor que a resposta que eu tinha pensado! Valeu, Orion!',
      time: '14:32'
    },
    {
      id: 4,
      sender: 'orion',
      text: 'Opa, magina! Estou aqui para te ajudar!',
      time: '14:33'
    }
  ];

  useEffect(() => {
    if (messageIndex < messages.length) {
      const timer = setTimeout(() => {
        if (messages[messageIndex].sender === 'orion') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessageIndex(messageIndex + 1);
          }, 2000);
        } else {
          setMessageIndex(messageIndex + 1);
        }
      }, messageIndex === 0 ? 1000 : 3000);

      return () => clearTimeout(timer);
    }
  }, [messageIndex, messages.length]);

  return (
    <section className="py-20 px-4 bg-[#0f1419]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Veja o <span className="text-[#25d366]">Orion</span> em ação
          </h2>
          <p className="text-xl text-[#a0aec0]">
            Simulação real de como quebrar a objeção de preço
          </p>
        </div>

        {/* WhatsApp Interface */}
        <div className="bg-[#1d2233] rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
          {/* Header */}
          <div className="bg-[#25d366] p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-[#25d366]" />
            </div>
            <div>
              <h3 className="font-bold text-white">Orion AI</h3>
              <p className="text-sm text-green-100">online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="p-6 space-y-4 min-h-[400px] bg-[#0b0f1a] bg-opacity-50">
            {messages.slice(0, messageIndex).map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-end space-x-2 max-w-[80%]">
                  {message.sender === 'orion' && (
                    <div className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-[#21a1ff] text-white rounded-br-md'
                        : 'bg-[#25d366] text-white rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm md:text-base">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">{message.time}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-[#21a1ff] rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#25d366] px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-[#a0aec0] mb-4">
            ✨ <strong className="text-[#00e676]">Orion</strong> tem respostas para todas as objeções
          </p>
          <button
            onClick={() => {setMessageIndex(0); setIsTyping(false);}}
            className="text-[#21a1ff] hover:text-[#00e676] transition-colors duration-300 underline"
          >
            🔄 Ver novamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppRoll;