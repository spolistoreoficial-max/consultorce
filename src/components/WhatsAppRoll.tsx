import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, ArrowLeft, Phone, Video, MoreVertical } from 'lucide-react';

const WhatsAppRoll = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

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
      text: 'Opa, magina! Estou aqui para te ajudar sempre que precisar! 🚀',
      time: '14:33'
    }
  ];

  // Auto scroll to bottom when new messages appear
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageIndex, isTyping]);

  useEffect(() => {
    if (messageIndex < messages.length) {
      const timer = setTimeout(() => {
        if (messages[messageIndex].sender === 'orion') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessageIndex(messageIndex + 1);
          }, 2500);
        } else {
          setMessageIndex(messageIndex + 1);
        }
      }, messageIndex === 0 ? 1000 : 3500);

      return () => clearTimeout(timer);
    }
  }, [messageIndex, messages.length]);

  const resetAnimation = () => {
    setMessageIndex(0);
    setIsTyping(false);
  };

  return (
    <section id="whatsapp-demo" className="py-20 px-4 bg-[#0f1419]">
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
        <div className="bg-[#1d2233] rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 max-w-md mx-auto">
          {/* Status Bar */}
          <div className="bg-[#075e54] px-4 py-2 flex justify-between items-center text-white text-xs">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span>📶</span>
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Header */}
          <div className="bg-[#075e54] p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ArrowLeft className="w-6 h-6 text-white" />
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00e676] to-[#21a1ff] rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-[#15192c]" strokeWidth={2.5} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00e676] rounded-full border-2 border-[#075e54]"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Orion AI</h3>
                <p className="text-xs text-green-200">
                  {isTyping ? 'digitando...' : 'online'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Video className="w-5 h-5 text-white" />
              <Phone className="w-5 h-5 text-white" />
              <MoreVertical className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Messages Container */}
          <div 
            ref={messagesContainerRef}
            className="h-[500px] overflow-y-auto bg-[#0b0f1a] bg-opacity-50 relative"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          >
            <div className="p-4 space-y-4">
              {/* Date separator */}
              <div className="flex justify-center">
                <div className="bg-[#1d2233] px-3 py-1 rounded-full text-xs text-[#a0aec0]">
                  Hoje
                </div>
              </div>

              {messages.slice(0, messageIndex).map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div className="flex items-end space-x-2 max-w-[85%]">
                    {message.sender === 'orion' && (
                      <div className="w-6 h-6 bg-gradient-to-r from-[#00e676] to-[#21a1ff] rounded-full flex items-center justify-center flex-shrink-0 mb-1">
                        <Bot className="w-3 h-3 text-[#15192c]" strokeWidth={3} />
                      </div>
                    )}
                    <div
                      className={`px-3 py-2 rounded-2xl shadow-lg ${
                        message.sender === 'user'
                          ? 'bg-[#005c4b] text-white rounded-br-md'
                          : 'bg-[#1f2937] text-white rounded-bl-md border border-gray-600'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <div className="flex items-center justify-end mt-1 space-x-1">
                        <p className="text-xs opacity-60">{message.time}</p>
                        {message.sender === 'user' && (
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 text-blue-300">
                              <svg viewBox="0 0 16 15" className="fill-current">
                                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l3.61 3.463c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.064-.512z"/>
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-[#21a1ff] rounded-full flex items-center justify-center flex-shrink-0 mb-1">
                        <User className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="flex items-end space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#00e676] to-[#21a1ff] rounded-full flex items-center justify-center mb-1">
                      <Bot className="w-3 h-3 text-[#15192c]" strokeWidth={3} />
                    </div>
                    <div className="bg-[#1f2937] px-4 py-3 rounded-2xl rounded-bl-md border border-gray-600">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#00e676] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#00e676] rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-[#00e676] rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-[#1e2428] p-3 flex items-center space-x-3">
            <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Digite uma mensagem</span>
            </div>
            <div className="w-10 h-10 bg-[#00e676] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-[#a0aec0] mb-4">
            ✨ <strong className="text-[#00e676]">Orion</strong> tem respostas para todas as objeções
          </p>
          <button
            onClick={resetAnimation}
            className="text-[#21a1ff] hover:text-[#00e676] transition-colors duration-300 underline font-semibold"
          >
            🔄 Ver novamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppRoll;