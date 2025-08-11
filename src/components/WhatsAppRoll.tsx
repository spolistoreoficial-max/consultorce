import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, ArrowLeft, Phone, Video, MoreVertical } from 'lucide-react';

const WhatsAppRoll = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentConversation, setCurrentConversation] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const conversations = [
    // Conversa 1: Quebra de objeção de preço
    {
      title: "Quebra de Objeção - Preço",
      userAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      userName: "Carlos",
      messages: [
        {
          id: 1,
          sender: 'user',
          text: 'Orion, o cliente achou caro. O que eu posso responder?',
          time: '14:30'
        },
        {
          id: 2,
          sender: 'orion',
          text: 'Pode responder o seguinte: "Entendo! Mas qual seria o impacto financeiro no seu bolso se hoje você batesse seu veículo? Pode custar de 10 a 50 mil dependendo da situação. O investimento na proteção é justamente para você economizar milhares de reais quando mais precisar."',
          time: '14:31'
        },
        {
          id: 3,
          sender: 'user',
          text: 'Perfeito! Bem melhor que a resposta que eu tinha pensado. Valeu, Orion!',
          time: '14:32'
        },
        {
          id: 4,
          sender: 'orion',
          text: 'Opa, magina! Estou aqui para te ajudar sempre que precisar! 🚀',
          time: '14:33'
        }
      ]
    },
    // Conversa 2: Cálculo de conversão
    {
      title: "Cálculo de Conversão",
      userAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      userName: "Marina",
      messages: [
        {
          id: 1,
          sender: 'user',
          text: 'Orion, esse mês fechei 25 placas e fiz 175 cotações, qual é minha conversão?',
          time: '15:45'
        },
        {
          id: 2,
          sender: 'orion',
          text: 'Sua taxa de conversão foi de 14,3% (25 vendas ÷ 175 cotações). Isso está acima da média do mercado que é 8-12%! 👏\n\nPara melhorar ainda mais, foque em:\n• Qualificar melhor os leads\n• Usar scripts para objeções\n• Follow-up em 24-48h',
          time: '15:46'
        },
        {
          id: 3,
          sender: 'user',
          text: 'Caramba, não sabia que estava acima da média! Obrigado pelas dicas!',
          time: '15:47'
        }
      ]
    },
    // Conversa 3: Script para objeção "vou pensar"
    {
      title: "Script - Vou Pensar",
      userAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      userName: "Roberto",
      messages: [
        {
          id: 1,
          sender: 'user',
          text: 'Cliente falou "vou pensar". Como respondo?',
          time: '16:20'
        },
        {
          id: 2,
          sender: 'orion',
          text: 'Use este script: "Entendo perfeitamente! É uma decisão importante mesmo. Me ajuda a entender: o que especificamente você gostaria de pensar? É sobre o valor, cobertura ou alguma dúvida técnica? Assim posso esclarecer agora e você decide com mais segurança."',
          time: '16:21'
        },
        {
          id: 3,
          sender: 'user',
          text: 'Funcionou! Ele disse que era sobre a cobertura e consegui esclarecer. Fechou! 🎉',
          time: '16:25'
        },
        {
          id: 4,
          sender: 'orion',
          text: 'Parabéns! 🎉 Mais uma venda fechada! A técnica de descobrir a real objeção sempre funciona.',
          time: '16:26'
        }
      ]
    },
    // Conversa 4: Organização de rotina
    {
      title: "Organização de Rotina",
      userAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      userName: "Ana",
      messages: [
        {
          id: 1,
          sender: 'user',
          text: 'Orion, me ajuda a organizar minha rotina de vendas? Estou perdido com tantos leads',
          time: '09:15'
        },
        {
          id: 2,
          sender: 'orion',
          text: 'Claro! Vou te dar um plano de rotina diária:\n\n🌅 MANHÃ (8h-12h):\n• Prospecção ativa (2h)\n• Follow-up de leads quentes (1h)\n• Apresentações agendadas (1h)\n\n🌞 TARDE (13h-18h):\n• Atendimento de leads novos\n• Negociação e fechamento\n• Organização para o dia seguinte',
          time: '09:16'
        },
        {
          id: 3,
          sender: 'user',
          text: 'Perfeito! Vou seguir essa rotina. Obrigado!',
          time: '09:17'
        }
      ]
    }
  ];

  const currentMessages = conversations[currentConversation].messages;

  // Scroll interno do container de mensagens (não interfere com a página)
  const scrollChatToBottom = () => {
    if (messagesEndRef.current && messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll interno apenas dentro do container do chat
    scrollChatToBottom();
  }, [messageIndex, isTyping]);

  useEffect(() => {
    if (messageIndex < currentMessages.length) {
      const timer = setTimeout(() => {
        if (currentMessages[messageIndex].sender === 'orion') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessageIndex(messageIndex + 1);
          }, 3000);
        } else {
          setMessageIndex(messageIndex + 1);
        }
      }, messageIndex === 0 ? 1000 : 4000);

      return () => clearTimeout(timer);
    } else {
      // Quando terminar uma conversa, espera 3s e vai para a próxima
      const timer = setTimeout(() => {
        const nextConversation = (currentConversation + 1) % conversations.length;
        setCurrentConversation(nextConversation);
        setMessageIndex(0);
        setIsTyping(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [messageIndex, currentMessages.length, currentConversation]);

  const resetAnimation = () => {
    setCurrentConversation(0);
    setMessageIndex(0);
    setIsTyping(false);
  };

  const switchConversation = (index: number) => {
    setCurrentConversation(index);
    setMessageIndex(0);
    setIsTyping(false);
  };
  return (
    <section id="whatsapp-demo" className="py-20 px-4 bg-[#0f1419]">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section - Stays at top */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Veja o <span className="text-[#25d366]">Orion</span> em ação
          </h2>
          <p className="text-sm md:text-base text-[#a0aec0] bg-[#1d2233] rounded-2xl px-4 py-3 border border-[#25d366]/20 max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-[#a0aec0] max-w-2xl mx-auto">
            👇 <span className="text-[#25d366] font-semibold">Clique nos botões abaixo</span> para ver diferentes exemplos de uso
          </p>
        </div>

        {/* Conversation Selector - Stays at top */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-6 max-w-4xl mx-auto px-4">
          {conversations.map((conv, index) => (
            <button
              key={index}
              onClick={() => switchConversation(index)}
              className={`px-2 md:px-4 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center ${
                currentConversation === index
                  ? 'bg-gradient-to-r from-[#25d366] to-[#22c55e] text-white shadow-[#25d366]/30 border-2 border-[#25d366]/50'
                  : 'bg-[#1d2233] text-[#a0aec0] hover:bg-gradient-to-r hover:from-[#25d366]/20 hover:to-[#22c55e]/20 hover:text-[#25d366] hover:border-[#25d366]/30 border-2 border-gray-700/50'
              }`}
            >
              {conv.title}
            </button>
          ))}
        </div>

        {/* Centered WhatsApp Container */}
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          {/* WhatsApp Interface - Perfectly Centered */}
          <div className="bg-[#1d2233] rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 w-full max-w-md mx-auto">
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
            className="h-[400px] md:h-[500px] overflow-y-auto bg-[#0b0f1a] bg-opacity-50 relative"
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

              {currentMessages.slice(0, messageIndex).map((message) => (
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
                        <img 
                          src={conversations[currentConversation].userAvatar} 
                          alt={conversations[currentConversation].userName}
                          className="w-6 h-6 rounded-full object-cover"
                        />
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
        </div>

        {/* Bottom Section - Stays at bottom */}
        <div className="text-center mt-8">
          <p className="text-base md:text-lg text-[#a0aec0] mb-4 px-4">
            ✨ <strong className="text-[#00e676]">Orion</strong> te ajuda em todas as situações de venda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={resetAnimation}
              className="text-[#21a1ff] hover:text-[#00e676] transition-colors duration-300 underline font-semibold"
            >
              🔄 Reiniciar demonstração
            </button>
            <span className="text-[#a0aec0] text-sm px-4 text-center">
              As conversas mudam automaticamente
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppRoll;