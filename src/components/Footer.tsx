import { Heart, Mail, MessageCircle } from 'lucide-react';

/**
 * Componente de Footer
 * Rodapé com links, informações de contato e avisos legais
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#201e1d] border-t border-[#FC4C01]/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FC4C01' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-[#FC4C01] mb-4 tracking-wider">
              OBLIVIUM
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              O servidor de Minecraft 1.5.2 que traz de volta a nostalgia da era de ouro.
              Uma comunidade adulta focada em diversão, amizade e experiências memoráveis.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">Lançamento: 15 de Janeiro de 2025</span>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#recursos', label: 'Recursos' },
                { href: '#comunidade', label: 'Comunidade' },
                { href: '#faq', label: 'FAQ' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#FC4C01] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold mb-4">Conecte-se</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#5865F2] transition-colors"
                >
                  <MessageCircle size={18} />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@oblivium.com.br"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FC4C01] transition-colors"
                >
                  <Mail size={18} />
                  contato@oblivium.com.br
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-[#2f2b29] rounded-lg border border-[#FC4C01]/20">
              <p className="text-sm text-gray-400 mb-2">IP do Servidor:</p>
              <p className="text-white font-mono font-bold">oblivium.com.br</p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-[#FC4C01]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Oblivium. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right flex items-center gap-2">
              Feito com <Heart className="text-[#FC4C01]" size={16} fill="currentColor" /> para a comunidade
            </p>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            Oblivium não é afiliado com Mojang AB ou Microsoft. Minecraft é uma marca registrada da Mojang AB.
          </p>
        </div>
      </div>
    </footer>
  );
}
