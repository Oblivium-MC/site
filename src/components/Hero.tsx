import { useEffect, useState } from 'react';
import { Copy, Check, Users, Zap } from 'lucide-react';
import FloatingCubes from './FloatingCubes';
import MinecraftBlock from './MinecraftBlock';
import MinecraftParticles from './MinecraftParticles';

/**
 * Componente Hero principal
 * Exibe o banner principal com countdown para o lançamento e informações do servidor
 */
export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const serverIP = 'oblivium.com.br';
  const launchDate = new Date('2026-01-15T00:00:00-03:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background com textura de Minecraft */}
      <div className="absolute inset-0 grass-texture opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2f2b29]/90 via-[#201e1d]/95 to-[#2f2b29]/90" />
      <FloatingCubes count={10} />
      <MinecraftParticles count={30} color="redstone" className="opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo e título principal */}
        <div className="mb-8">
          <h1 className="minecraft-font text-4xl md:text-6xl text-[#FC4C01] mb-4 tracking-wider drop-shadow-[0_0_30px_rgba(252,76,1,0.5)]">
            OBLIVIUM
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            A Nostalgia do Minecraft 1.5.2 Reinventada
          </p>
          <p className="text-lg text-gray-400">
            Servidor Brasileiro de Survival para Adultos
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Lançamento em:
          </h2>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {[
              { value: timeLeft.days, label: 'Dias' },
              { value: timeLeft.hours, label: 'Horas' },
              { value: timeLeft.minutes, label: 'Minutos' },
              { value: timeLeft.seconds, label: 'Segundos' },
            ].map((item, index) => (
              <MinecraftBlock
                key={index}
                variant="stone"
                className="p-4 md:p-6 min-w-[80px] md:min-w-[120px]"
                hover={false}
              >
                <div className="text-4xl md:text-6xl font-bold text-[#FC4C01] mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                  {item.label}
                </div>
              </MinecraftBlock>
            ))}
          </div>
          <p className="text-gray-400 mt-6 text-lg">
            15 de Janeiro de 2026 • 00:00 BRT
          </p>
        </div>

        {/* Server IP e CTA */}
        <div className="mb-8">
          <MinecraftBlock variant="obsidian" className="inline-flex flex-col sm:flex-row items-center gap-4 p-6" hover={false}>
            <div className="text-left">
              <p className="text-gray-400 text-sm mb-1">IP do Servidor:</p>
              <p className="text-2xl font-mono font-bold text-white">{serverIP}</p>
            </div>
            <button
              onClick={copyServerIP}
              className="flex items-center gap-2 bg-[#FC4C01] hover:bg-[#FC4C01]/90 text-white px-6 py-3 transition-all duration-200 font-semibold minecraft-button"
            >
              {copied ? (
                <>
                  <Check size={20} />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copiar IP
                </>
              )}
            </button>
          </MinecraftBlock>
        </div>

        {/* Destaques rápidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <MinecraftBlock variant="grass" className="p-6">
            <Users className="text-[#FC4C01] mx-auto mb-3" size={32} />
            <h3 className="text-white font-bold mb-2">Comunidade Adulta</h3>
            <p className="text-gray-400 text-sm">
              Relaxe após o trabalho com jogadores maduros
            </p>
          </MinecraftBlock>
          <MinecraftBlock variant="stone" className="p-6">
            <Zap className="text-[#FC4C01] mx-auto mb-3" size={32} />
            <h3 className="text-white font-bold mb-2">Servidor Brasileiro</h3>
            <p className="text-gray-400 text-sm">
              Hospedado no Brasil para lag zero
            </p>
          </MinecraftBlock>
          <MinecraftBlock variant="wood" className="p-6">
            <div className="text-[#FC4C01] mx-auto mb-3 text-2xl font-bold">1.5.2</div>
            <h3 className="text-white font-bold mb-2">Nostalgia Pura</h3>
            <p className="text-gray-400 text-sm">
              Reviva a era de ouro do Minecraft
            </p>
          </MinecraftBlock>
        </div>
      </div>
    </section>
  );
}
