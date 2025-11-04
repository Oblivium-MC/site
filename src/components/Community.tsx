import { MessageCircle, Users, Heart, TrendingUp } from 'lucide-react';

/**
 * Componente de Comunidade
 * Destaca a comunidade do servidor e integração com Discord
 */
export default function Community() {
  const communityStats = [
    { icon: Users, value: '500+', label: 'Jogadores Esperados' },
    { icon: MessageCircle, value: '24/7', label: 'Suporte Ativo' },
    { icon: Heart, value: '100%', label: 'Comunidade Adulta' },
    { icon: TrendingUp, value: 'Top', label: 'Servidor BR' },
  ];

  return (
    <section id="comunidade" className="py-20 bg-[#2f2b29] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FC4C01' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-[#FC4C01]">Comunidade</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Junte-se a uma comunidade de jogadores adultos apaixonados por Minecraft.
            Faça amizades, compartilhe experiências e crie memórias inesquecíveis.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#201e1d] border-2 border-[#FC4C01]/20 rounded-lg p-6 text-center hover:border-[#FC4C01]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Icon className="text-[#FC4C01] mx-auto mb-3" size={40} />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Discord Integration */}
        <div className="bg-gradient-to-br from-[#5865F2]/20 to-[#5865F2]/5 border-2 border-[#5865F2]/30 rounded-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Junte-se ao Nosso Discord
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nossa comunidade está sempre ativa no Discord! Converse com outros jogadores,
                receba atualizações em primeira mão, participe de sorteios e tire suas dúvidas
                com a nossa equipe.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Chat em tempo real com jogadores',
                  'Anúncios de eventos e atualizações',
                  'Suporte técnico rápido e eficiente',
                  'Canais de voz para jogar em grupo',
                  'Sorteios exclusivos e brindes',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-[#5865F2] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:transform hover:scale-105 inline-flex items-center gap-3">
                <MessageCircle size={24} />
                Entrar no Discord
              </button>
            </div>
            <div className="bg-[#201e1d] border-2 border-[#5865F2]/30 rounded-lg p-8">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">
                O Que Esperar
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#2f2b29] p-4 rounded-lg">
                  <div className="text-3xl">🎮</div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Jogadores Ativos</h5>
                    <p className="text-gray-400 text-sm">
                      Sempre tem alguém online para jogar junto
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#2f2b29] p-4 rounded-lg">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Ambiente Respeitoso</h5>
                    <p className="text-gray-400 text-sm">
                      Comunidade madura e acolhedora para todos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#2f2b29] p-4 rounded-lg">
                  <div className="text-3xl">📢</div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Transparência</h5>
                    <p className="text-gray-400 text-sm">
                      Atualizações constantes sobre o servidor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regras da Comunidade */}
        <div className="bg-[#201e1d] border-2 border-[#FC4C01]/30 rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Diretrizes da Comunidade
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-xl font-bold text-white mb-2">Respeito Mútuo</h4>
              <p className="text-gray-400">
                Trate todos com respeito e cordialidade
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🚫</div>
              <h4 className="text-xl font-bold text-white mb-2">Fair Play</h4>
              <p className="text-gray-400">
                Proibido uso de hacks, cheats ou exploits
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">💬</div>
              <h4 className="text-xl font-bold text-white mb-2">Comunicação Positiva</h4>
              <p className="text-gray-400">
                Mantenha conversas construtivas e amigáveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
