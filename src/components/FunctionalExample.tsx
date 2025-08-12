import React, { useState, useEffect } from 'react';
import { CheckCircle, MessageCircle, Bot, Copy, ExternalLink, ArrowRight, Smartphone, UserPlus, Play, Pause, Lock } from 'lucide-react';

const FunctionalExample = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showProtectedInfo, setShowProtectedInfo] = useState(false);

  const protectedNumber = "••• •• •••••-••••";
  const realNumber = "+55 11 98613-1110";
  const orionNumber = realNumber;
  const welcomeMessage = "Oi! Sou o Orion, seu consultor de IA para proteção veicular. Acabei de receber sua compra e estou pronto para te ajudar! Digite 'oi' para começarmos 🚀";

  const steps = [
    {
      title: "1. Compra Aprovada ✅",
      description: "Pagamento processado com sucesso",
      content: (
        <div className="bg-[#00e676]/10 border border-[#00e676]/30 rounded-2xl p-6">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-12 h-12 text-[#00e676]" />
          </div>
          <h3 className="text-xl font-bold text-[#00e676] text-center mb-2">
            Pagamento Aprovado!
          </h3>
          <p className="text-center text-[#a0aec0]">
            Sua compra do Orion foi processada com sucesso
          </p>
        </div>
      )
    },
    {
      title: "2. Recebe Boas-Vindas 📧",
      description: "E-mail automático com instruções",
      content: (
        <div className="bg-[#1d2233] border border-gray-700/50 rounded-2xl p-6">
          <div className="bg-white rounded-lg p-4 text-[#15192c]">
            <div className="border-b pb-3 mb-4">
              <h4 className="font-bold">Bem-vindo ao Orion! 🎉</h4>
              <p className="text-sm text-gray-600">De: suporte@orion-ai.com</p>
            </div>
            <div className="space-y-3 text-sm">
              <p>Olá! Sua compra foi aprovada com sucesso.</p>
              <p><strong>Próximo passo:</strong> Adicionar o Orion no seu WhatsApp</p>
              <div className="bg-[#00e676]/10 p-3 rounded-lg">
                <p className="font-bold text-[#00e676]">Número do Orion:</p>
                <div className="flex items-center space-x-2">
                  <p className="font-mono text-lg text-[#a0aec0]">{protectedNumber}</p>
                  <Lock className="w-4 h-4 text-[#ffe066]" />
                </div>
              </div>
              <p>É só adicionar como qualquer contato e começar a conversar!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "3. Adiciona no WhatsApp 📱",
      description: "Salva o contato normalmente",
      content: (
        <div className="bg-[#1d2233] border border-gray-700/50 rounded-2xl p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-[#25d366] rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="bg-[#25d366]/10 border border-[#25d366]/30 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <UserPlus className="w-5 h-5 text-[#25d366]" />
                <span className="font-bold text-[#25d366]">Adicionar Contato</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Nome:</span>
                  <span className="font-bold">Orion IA</span>
                </div>
                <div className="flex justify-between">
                  <span>Número:</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[#a0aec0]">{protectedNumber}</span>
                    <Lock className="w-3 h-3 text-[#ffe066]" />
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-[#a0aec0] text-sm">
              Número enviado após a compra
            </p>
          </div>
        </div>
      )
    },
    {
      title: "4. Primeira Conversa 💬",
      description: "Orion se apresenta e está pronto",
      content: (
        <div className="bg-[#1d2233] border border-gray-700/50 rounded-2xl p-6">
          {/* WhatsApp Interface Simulada */}
          <div className="bg-[#075e54] rounded-t-xl p-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00e676] to-[#21a1ff] rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#15192c]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Orion IA</h4>
                <p className="text-xs text-green-200">online</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0b0f1a] p-4 rounded-b-xl min-h-[200px]">
            <div className="space-y-3">
              {/* Mensagem do Orion */}
              <div className="flex justify-start">
                <div className="bg-[#1f2937] text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-[85%]">
                  <p className="text-sm">{welcomeMessage}</p>
                  <p className="text-xs opacity-60 mt-1">agora</p>
                </div>
              </div>
              
              {/* Mensagem do usuário */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white px-4 py-2 rounded-2xl rounded-br-md">
                  <p className="text-sm">Oi! Pronto para começar! 🚀</p>
                  <p className="text-xs opacity-60 mt-1">agora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000); // Mais rápido como um vídeo

    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const restartVideo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-20 px-4 bg-[#0f1419]">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
            <span className="text-[#00e676]">Vídeo:</span> Como funciona na prática
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] max-w-2xl mx-auto px-4">
            Do pagamento até ter o Orion funcionando no seu WhatsApp
          </p>
        </div>

        {/* Video Controls */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button
            onClick={togglePlay}
            className="bg-[#00e676] hover:bg-[#00d865] text-[#15192c] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
          </button>
          
          <div className="flex items-center space-x-2 bg-[#1d2233] rounded-full px-4 py-2">
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => {
                    setCurrentStep(index);
                    setIsPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-[#00e676] scale-125'
                      : index < currentStep
                      ? 'bg-[#21a1ff]'
                      : 'bg-gray-600'
                  }`}
                />
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 transition-all duration-300 ${
                    index < currentStep ? 'bg-[#21a1ff]' : 'bg-gray-600'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          
          <button
            onClick={restartVideo}
            className="text-[#21a1ff] hover:text-[#00e676] transition-colors duration-300 text-sm font-semibold"
          >
            🔄 Reiniciar
          </button>
        </div>

        {/* Video Frame */}
        <div className="mb-8 relative">
          {/* Video Frame Border */}
          <div className="bg-gradient-to-r from-[#00e676] to-[#21a1ff] p-1 rounded-3xl">
            <div className="bg-[#0f1419] rounded-3xl p-6">
              {/* Video Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              {/* Video Content */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#00e676]">
                  {steps[currentStep].title}
                </h3>
                <p className="text-[#a0aec0]">
                  {steps[currentStep].description}
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                {steps[currentStep].content}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#ff5722] hover:to-[#ff9800] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-lg shadow-lg border-2 border-[#ff6b35]/50"
            >
              <span>🔥 Garantir Minha Vaga Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="bg-[#1d2233] rounded-2xl p-6 border border-[#00e676]/20">
            <h4 className="text-xl font-bold mb-4 text-[#00e676]">
              🔒 Informações protegidas até a compra
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
              <div className="flex items-center justify-center space-x-2">
                <Lock className="w-4 h-4 text-[#ffe066]" />
                <span>Número do Orion enviado por e-mail</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#00e676]" />
                <span>Acesso imediato após pagamento</span>
              </div>
            </div>
            <p className="text-xs text-[#a0aec0]">
              Por segurança, o contato do Orion só é liberado após a confirmação do pagamento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalExample;