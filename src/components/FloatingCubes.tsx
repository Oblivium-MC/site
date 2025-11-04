import MinecraftCube from './MinecraftCube';

/**
 * Componente de Cubos Flutuantes do Minecraft
 * Renderiza múltiplos cubos animados em posições aleatórias
 */
interface FloatingCubesProps {
  count?: number;
  className?: string;
}

export default function FloatingCubes({ count = 8, className = '' }: FloatingCubesProps) {
  const textures: Array<'grass' | 'stone' | 'dirt' | 'diamond' | 'redstone' | 'wood'> = [
    'grass', 'stone', 'dirt', 'diamond', 'redstone', 'wood'
  ];

  const cubes = Array.from({ length: count }, (_, i) => ({
    id: i,
    texture: textures[i % textures.length],
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 90}%`,
    size: 60 + Math.random() * 40,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute opacity-20"
          style={{
            left: cube.left,
            top: cube.top,
            animation: `cubeFloat ${cube.duration}s ease-in-out ${cube.delay}s infinite`,
          }}
        >
          <MinecraftCube
            texture={cube.texture}
            size={cube.size}
            animate={false}
          />
        </div>
      ))}
    </div>
  );
}
