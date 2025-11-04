import { ReactNode } from 'react';

/**
 * Componente de Container estilo bloco do Minecraft
 * Adiciona bordas pixelizadas e efeito de profundidade aos containers
 */
interface MinecraftBlockProps {
  children: ReactNode;
  variant?: 'grass' | 'stone' | 'wood' | 'obsidian';
  className?: string;
  hover?: boolean;
}

export default function MinecraftBlock({
  children,
  variant = 'stone',
  className = '',
  hover = true
}: MinecraftBlockProps) {
  const variants = {
    grass: 'bg-[#2f2b29] border-[#7cbd6b]/30 hover:border-[#7cbd6b]/60',
    stone: 'bg-[#2f2b29] border-[#7d7d7d]/30 hover:border-[#7d7d7d]/60',
    wood: 'bg-[#2f2b29] border-[#9c7851]/30 hover:border-[#9c7851]/60',
    obsidian: 'bg-[#201e1d] border-[#1a1a2e]/30 hover:border-[#1a1a2e]/60',
  };

  return (
    <div
      className={`
        relative
        border-4
        ${variants[variant]}
        ${hover ? 'transition-all duration-300 hover:scale-105' : ''}
        ${className}
        minecraft-border
      `}
      style={{
        boxShadow: `
          4px 4px 0px rgba(0, 0, 0, 0.3),
          inset -2px -2px 0px rgba(0, 0, 0, 0.2),
          inset 2px 2px 0px rgba(255, 255, 255, 0.1)
        `,
      }}
    >
      {children}
    </div>
  );
}
