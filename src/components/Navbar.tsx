import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Componente de navegação principal
 * Responsável pelo menu de navegação responsivo com links de rolagem suave
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#recursos', label: 'Recursos' },
    { href: '#comunidade', label: 'Comunidade' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#201e1d]/95 backdrop-blur-sm border-b border-[#FC4C01]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#FC4C01] tracking-wider">
              OBLIVIUM
            </span>
            <span className="ml-2 text-sm text-gray-400">v1.5.2</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-[#FC4C01] transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#FC4C01] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#2f2b29] border-t border-[#FC4C01]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#FC4C01] hover:bg-[#201e1d] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
