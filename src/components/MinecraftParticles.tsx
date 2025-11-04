import { useEffect, useState } from 'react';

/**
 * Componente de Partículas flutuantes do Minecraft
 * Cria efeito de partículas redstone/XP flutuando na tela
 */
interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
}

interface MinecraftParticlesProps {
  count?: number;
  color?: 'redstone' | 'xp' | 'enchant';
  className?: string;
}

export default function MinecraftParticles({
  count = 20,
  color = 'redstone',
  className = ''
}: MinecraftParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const colors = {
    redstone: '#dc3c3c',
    xp: '#7cbd6b',
    enchant: '#5decf5',
  };

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
      size: 2 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute pixelated animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: colors[color],
            boxShadow: `0 0 ${particle.size * 2}px ${colors[color]}`,
            animation: `particleFloat ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
