import React from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#15192c]/95 backdrop-blur-sm border-b border-gray-700/30 relative z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#00e676] to-[#21a1ff] rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#15192c]" strokeWidth={2.5} />
            </div>
            <span className="text-lg md:text-xl font-bold text-[#f3f3f8]">Orion</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('differentials')}
              className="text-[#f3f3f8] hover:text-[#00e676] transition-colors duration-300 font-medium"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-[#f3f3f8] hover:text-[#00e676] transition-colors duration-300 font-medium"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-[#f3f3f8] hover:text-[#00e676] transition-colors duration-300 font-medium"
            >
              FAQ
            </button>
            <a
              href={`https://wa.me/5511986131110?text=${encodeURIComponent("Vim do Site do Orion e gostaria de tirar algumas dúvidas")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] hover:bg-[#22c55e] text-white px-4 md:px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#f3f3f8] hover:text-[#00e676] transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#15192c] border-b border-gray-700/30 shadow-xl z-40">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('differentials')}
                className="block w-full text-left text-[#f3f3f8] hover:text-[#00e676] transition-colors duration-300 font-medium py-2"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-[#f3f3f8] hover:text-[#00e676] transition-colors duration-300 font-medium py-2"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-[#f3f3f8] hover:text-[#00e676] transition-colors duration-300 font-medium py-2"
              >
                FAQ
              </button>
              <a
                href={`https://wa.me/5511986131110?text=${encodeURIComponent("Vim do Site do Orion e gostaria de tirar algumas dúvidas")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25d366] hover:bg-[#22c55e] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
