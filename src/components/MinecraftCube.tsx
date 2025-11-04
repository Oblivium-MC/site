/**
 * Componente de Cubo 3D do Minecraft
 * Renderiza um cubo isométrico animado com texturas do Minecraft
 */
interface MinecraftCubeProps {
  texture?: 'grass' | 'stone' | 'dirt' | 'diamond' | 'redstone' | 'wood';
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function MinecraftCube({
  texture = 'grass',
  size = 80,
  className = '',
  animate = true
}: MinecraftCubeProps) {
  const textureColors = {
    grass: { top: '#7cbd6b', side: '#92a46f', bottom: '#8b6f47' },
    stone: { top: '#7d7d7d', side: '#6b6b6b', bottom: '#5a5a5a' },
    dirt: { top: '#8b6f47', side: '#7a5f3d', bottom: '#6b5235' },
    diamond: { top: '#5decf5', side: '#4ac5cf', bottom: '#3ba3ad' },
    redstone: { top: '#dc3c3c', side: '#c23434', bottom: '#a82d2d' },
    wood: { top: '#9c7851', side: '#8b6846', bottom: '#7a5a3d' },
  };

  const colors = textureColors[texture];

  return (
    <div
      className={`relative ${animate ? 'animate-float' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transformStyle: 'preserve-3d',
        transform: 'rotateX(30deg) rotateY(45deg)',
      }}
    >
      {/* Face superior */}
      <div
        className="absolute pixelated"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: colors.top,
          transform: `translateZ(${size / 2}px)`,
          boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.2)',
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent ${size/8}px, rgba(0,0,0,0.1) ${size/8}px, rgba(0,0,0,0.1) ${size/8 + 1}px),
            repeating-linear-gradient(90deg, transparent, transparent ${size/8}px, rgba(0,0,0,0.1) ${size/8}px, rgba(0,0,0,0.1) ${size/8 + 1}px)
          `,
        }}
      />

      {/* Face frontal */}
      <div
        className="absolute pixelated"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: colors.side,
          transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.3)',
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent ${size/8}px, rgba(0,0,0,0.15) ${size/8}px, rgba(0,0,0,0.15) ${size/8 + 1}px),
            repeating-linear-gradient(90deg, transparent, transparent ${size/8}px, rgba(0,0,0,0.15) ${size/8}px, rgba(0,0,0,0.15) ${size/8 + 1}px)
          `,
        }}
      />

      {/* Face lateral */}
      <div
        className="absolute pixelated"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: colors.side,
          transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.3)',
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent ${size/8}px, rgba(0,0,0,0.15) ${size/8}px, rgba(0,0,0,0.15) ${size/8 + 1}px),
            repeating-linear-gradient(90deg, transparent, transparent ${size/8}px, rgba(0,0,0,0.15) ${size/8}px, rgba(0,0,0,0.15) ${size/8 + 1}px)
          `,
        }}
      />
    </div>
  );
}
