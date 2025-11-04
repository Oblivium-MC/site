import { Swords, Users, Zap, Gift } from 'lucide-react';
import MinecraftBlock from './MinecraftBlock';
import MinecraftParticles from './MinecraftParticles';

/**
 * Componente de Detalhes de Gameplay
 * Mostra informações sobre modos de jogo, eventos e mecânicas
 */
export default function Gameplay() {
  const gameModes = [
    {
      icon: Users,
      title: 'Modo Survival',
      image: '🏰',
      description: 'Construa sua base, forme alianças e domine a economia do servidor.',
      features: [
        'Proteção de terrenos ilimitada',
        'Sistema de clãs e guerras',
        'Economia balanceada com lojas',
        'Missões diárias e semanais',
      ],
    },
    {
      icon: Swords,
      title: 'Arenas PVP',
      image: '⚔️',
      description: 'Teste suas habilidades em combate contra outros jogadores experientes.',
      features: [
        'Arena 1v1 ranqueada',
        'Batalhas em equipe 5v5',
        'Kit PVP balanceado',
        'Sistema de ranking e recompensas',
      ],
    },
    {
      icon: Zap,
      title: 'Eventos Especiais',
      image: '🎪',
      description: 'Participe de eventos exclusivos com prêmios incríveis toda semana.',
      features: [
        'Boss Fights épicas',
        'Caça ao tesouro',
        'Guerras entre clãs',
        'Competições de construção',
      ],
    },
    {
      icon: Gift,
      title: 'Recompensas',
      image: '🎁',
      description: 'Ganhe itens exclusivos, recursos raros e privilégios especiais.',
      features: [
        'Votos diários com prêmios',
        'Sistema de conquistas',
        'Drops customizados',
        'Itens cosméticos exclusivos',
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#201e1d] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 obsidian-texture opacity-5" />
      <MinecraftParticles count={25} color="enchant" className="opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Modos de <span className="text-[#FC4C01]">Jogo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Diversas formas de jogar e se divertir. Do survival tranquilo ao PVP intenso,
            há algo para todos os estilos de jogadores.
          </p>
        </div>

        {/* Grid de modos de jogo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gameModes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <MinecraftBlock
                key={index}
                variant="obsidian"
                className="p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FC4C01] to-[#FC4C01]/70 rounded-lg flex items-center justify-center text-3xl">
                      {mode.image}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="text-[#FC4C01]" size={24} />
                      <h3 className="text-2xl font-bold text-white">
                        {mode.title}
                      </h3>
                    </div>
                    <p className="text-gray-400">
                      {mode.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {mode.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#FC4C01] rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </MinecraftBlock>
            );
          })}
        </div>

        {/* Calendário de eventos */}
        <MinecraftBlock variant="wood" className="mt-16 p-8 md:p-12" hover={false}>
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Calendário de Eventos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <MinecraftBlock variant="stone" className="text-center p-6" hover={false}>
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-xl font-bold text-white mb-2">Segunda-feira</h4>
              <p className="text-gray-400">Boss Fight Semanal</p>
            </MinecraftBlock>
            <MinecraftBlock variant="stone" className="text-center p-6" hover={false}>
              <div className="text-4xl mb-3">⚔️</div>
              <h4 className="text-xl font-bold text-white mb-2">Quarta-feira</h4>
              <p className="text-gray-400">Torneio PVP</p>
            </MinecraftBlock>
            <MinecraftBlock variant="stone" className="text-center p-6" hover={false}>
              <div className="text-4xl mb-3">🏗️</div>
              <h4 className="text-xl font-bold text-white mb-2">Sábado</h4>
              <p className="text-gray-400">Competição de Construção</p>
            </MinecraftBlock>
          </div>
          <p className="text-center text-gray-400 mt-6">
            * Eventos especiais e surpresas podem acontecer a qualquer momento!
          </p>
        </MinecraftBlock>
      </div>
    </section>
  );
}
