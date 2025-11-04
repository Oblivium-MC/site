import { Heart, Clock, Sparkles, Globe } from 'lucide-react';
import MinecraftBlock from './MinecraftBlock';
import MinecraftCube from './MinecraftCube';

/**
 * Componente Sobre o Oblivium
 * Explica a proposta do servidor e seus diferenciais
 */
export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Comunidade Acolhedora',
      description: 'Construa amizades verdadeiras com jogadores adultos que buscam diversão e boa conversa após o trabalho.',
    },
    {
      icon: Clock,
      title: 'Nostalgia Reimaginada',
      description: 'Reviva a experiência clássica do Minecraft 1.5.2, a era de ouro que marcou uma geração de jogadores.',
    },
    {
      icon: Sparkles,
      title: 'Experiência Personalizada',
      description: 'Plugins customizados, eventos exclusivos e arenas PVP especiais para enriquecer sua jornada.',
    },
    {
      icon: Globe,
      title: 'Servidor Brasileiro',
      description: 'Hospedado no Brasil para garantir a melhor latência e conexão estável para jogadores brasileiros.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-[#201e1d] relative overflow-hidden">
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 dirt-texture opacity-10" />
      <div className="absolute top-20 left-10 opacity-15">
        <MinecraftCube texture="grass" size={90} />
      </div>
      <div className="absolute bottom-10 right-20 opacity-15">
        <MinecraftCube texture="wood" size={70} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bem-vindo ao <span className="text-[#FC4C01]">Oblivium</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um servidor de Minecraft dedicado a trazer de volta a magia e simplicidade
            da versão 1.5.2, construído especialmente para adultos que buscam relaxar,
            fazer amizades e reviver memórias.
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MinecraftBlock
                key={index}
                variant="wood"
                className="p-8"
              >
                <Icon className="text-[#FC4C01] mb-4" size={40} />
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

        {/* História e propósito */}
        <MinecraftBlock variant="grass" className="p-8 md:p-12" hover={false}>
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Por Que Oblivium?
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <div>
              <p className="mb-4">
                Criamos o Oblivium para resgatar a essência do que tornava o Minecraft
                tão especial: a simplicidade, a comunidade unida e a liberdade de explorar
                e construir sem distrações.
              </p>
              <p>
                A versão 1.5.2 representa um momento único na história do jogo, onde
                cada conquista tinha valor real e a experiência era genuinamente desafiadora
                e recompensadora.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Nosso foco em jogadores adultos significa que você encontrará uma comunidade
                madura, respeitosa e focada em diversão. Aqui, você pode relaxar após um
                longo dia de trabalho e se conectar com pessoas que compartilham sua paixão.
              </p>
              <p>
                Seja para construir projetos épicos, explorar cavernas perigosas ou
                dominar nas arenas PVP, o Oblivium é o seu novo lar no Minecraft.
              </p>
            </div>
          </div>
        </MinecraftBlock>
      </div>
    </section>
  );
}
