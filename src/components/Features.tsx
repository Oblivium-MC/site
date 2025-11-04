import { Sword, Trophy, Cog, Map, Shield, Pickaxe } from 'lucide-react';
import MinecraftBlock from './MinecraftBlock';
import MinecraftCube from './MinecraftCube';

/**
 * Componente de Recursos do Servidor
 * Destaca as principais funcionalidades e modos de jogo
 */
export default function Features() {
  const mainFeatures = [
    {
      icon: Pickaxe,
      title: 'Survival Clássico',
      description: 'Experiência pura de sobrevivência com economia balanceada, proteção de terrenos e sistema de clãs.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Sword,
      title: 'Mundos PVP',
      description: 'Arenas dedicadas para combates épicos, eventos de guerra entre clãs e batalhas ranqueadas.',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: Trophy,
      title: 'Eventos Semanais',
      description: 'Competições emocionantes, caça ao tesouro, boss fights e desafios especiais com prêmios exclusivos.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Cog,
      title: 'Plugins Customizados',
      description: 'Mecânicas exclusivas desenvolvidas pela nossa equipe para enriquecer a experiência de jogo.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Map,
      title: 'Mapas Expansivos',
      description: 'Mundos gigantescos com biomas variados, dungeons ocultas e estruturas únicas para explorar.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Shield,
      title: 'Proteção Total',
      description: 'Sistema anti-grief avançado, moderação ativa 24/7 e backup automático para segurança total.',
      color: 'from-indigo-500 to-blue-600',
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-[#2f2b29] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stone-texture opacity-10" />
      <div className="absolute top-10 right-10 opacity-20">
        <MinecraftCube texture="diamond" size={100} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <MinecraftCube texture="redstone" size={80} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recursos <span className="text-[#FC4C01]">Incríveis</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tudo que você amava no Minecraft clássico, agora com melhorias modernas
            e recursos exclusivos para uma experiência incomparável.
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MinecraftBlock
                key={index}
                variant="stone"
                className="group p-8"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </MinecraftBlock>
            );
          })}
        </div>

        {/* Destaque especial */}
        <MinecraftBlock variant="obsidian" className="mt-16 p-8 md:p-12 text-center" hover={false}>
          <h3 className="text-3xl font-bold text-white mb-4">
            Latência Ultra-Baixa
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Nosso servidor está hospedado em data centers de última geração no Brasil,
            garantindo ping baixíssimo e conexão estável para todos os jogadores brasileiros.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FC4C01] mb-2">{'<20ms'}</div>
              <div className="text-gray-400">Ping Médio BR</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FC4C01] mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Garantido</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FC4C01] mb-2">24/7</div>
              <div className="text-gray-400">Suporte Ativo</div>
            </div>
          </div>
        </MinecraftBlock>
      </div>
    </section>
  );
}
