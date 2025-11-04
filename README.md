# 🎮 Oblivium - Site Oficial

<div align="center">

![Oblivium](https://img.shields.io/badge/Minecraft-1.5.2-brightgreen?style=for-the-badge&logo=minecraft)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**Site oficial do servidor brasileiro de Minecraft 1.5.2 focado em adultos**

[🌐 Site](https://oblivium.com.br) • [📧 Contato](#contato) • [🎪 Comunidade](#comunidade)

</div>

---

## 📖 Sobre o Projeto

Este é o repositório do site oficial do **Oblivium**, um servidor brasileiro de Minecraft versão 1.5.2 focado em jogadores adultos que buscam reviver a nostalgia da era de ouro do jogo. O site foi desenvolvido como uma landing page moderna e interativa, com elementos visuais inspirados no próprio Minecraft.

### ✨ Características do Site

- 🎨 **Design Temático**: Interface inspirada no Minecraft com cubos 3D animados e partículas
- 📱 **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- ⚡ **Performance**: Construído com Vite para carregamento ultrarrápido
- 🔐 **Seguro**: Integração com Supabase com Row Level Security (RLS)
- 🌐 **SEO Otimizado**: Meta tags completas para redes sociais e motores de busca
- ♿ **Acessível**: Componentes desenvolvidos seguindo boas práticas de acessibilidade

## 🚀 Tecnologias

Este projeto utiliza tecnologias modernas e eficientes:

- **[React 18](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool e dev server de alta performance
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Supabase](https://supabase.com/)** - Backend-as-a-Service (PostgreSQL, Auth, Storage)
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna e leve

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 18+ e npm
- Conta no [Supabase](https://supabase.com/) (plano gratuito é suficiente)

### Configuração

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/oblivium-site.git
cd oblivium-site
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. **Configure o banco de dados Supabase**

Execute a migration localizada em `supabase/migrations/20251104120824_create_oblivium_tables.sql` no seu projeto Supabase. Isso criará as tabelas necessárias:

- `newsletter_subscribers` - Assinantes da newsletter
- `contact_messages` - Mensagens do formulário de contato
- `server_status` - Status do servidor Minecraft

5. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Comandos Disponíveis

```bash
npm run dev        # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção
npm run preview    # Visualiza o build de produção localmente
npm run lint       # Executa o linter (ESLint)
npm run typecheck  # Verifica tipos TypeScript sem emitir arquivos
```

## 🏗️ Estrutura do Projeto

```
oblivium-site/
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── Gameplay.tsx
│   │   ├── Community.tsx
│   │   ├── FAQ.tsx
│   │   ├── Newsletter.tsx      # Formulário de newsletter (integrado com Supabase)
│   │   ├── Contact.tsx         # Formulário de contato (integrado com Supabase)
│   │   ├── Footer.tsx
│   │   ├── FloatingCubes.tsx   # Cubos 3D animados
│   │   ├── MinecraftCube.tsx
│   │   ├── MinecraftBlock.tsx
│   │   └── MinecraftParticles.tsx
│   ├── lib/
│   │   └── supabase.ts         # Cliente e tipos do Supabase
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globais
├── supabase/
│   └── migrations/             # Migrations do banco de dados
├── public/                     # Arquivos estáticos
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Componentes Principais

### Componentes Decorativos

- **FloatingCubes**: Cubos 3D animados que flutuam no fundo
- **MinecraftCube**: Componente de cubo individual com rotação 3D
- **MinecraftBlock**: Blocos estilizados inspirados no Minecraft
- **MinecraftParticles**: Sistema de partículas para efeitos visuais

### Componentes Funcionais

- **Newsletter**: Formulário de inscrição na newsletter com validação e integração Supabase
- **Contact**: Formulário de contato completo com validação de campos
- **Navbar**: Barra de navegação responsiva com links suaves para seções
- **Hero**: Seção principal com countdown para o lançamento
- **FAQ**: Perguntas frequentes com accordion interativo

## 🗄️ Banco de Dados

O projeto utiliza Supabase (PostgreSQL) com as seguintes tabelas:

### newsletter_subscribers

Armazena inscrições na newsletter

```sql
- id (uuid, PK)
- email (text, unique)
- subscribed_at (timestamptz)
- confirmed (boolean)
- metadata (jsonb)
```

### contact_messages

Armazena mensagens do formulário de contato

```sql
- id (uuid, PK)
- name (text)
- email (text)
- subject (text, nullable)
- message (text)
- submitted_at (timestamptz)
- read (boolean)
```

### server_status

Rastreia o status do servidor Minecraft

```sql
- id (uuid, PK)
- online (boolean)
- player_count (integer)
- max_players (integer)
- version (text)
- last_updated (timestamptz)
```

Todas as tabelas possuem Row Level Security (RLS) habilitada com políticas apropriadas para leitura pública e inserção segura.

## 🎯 Funcionalidades

### ✅ Implementadas

- [x] Landing page responsiva completa
- [x] Formulário de newsletter com Supabase
- [x] Formulário de contato com Supabase
- [x] Animações 3D de cubos do Minecraft
- [x] Sistema de partículas decorativo
- [x] Seção FAQ com accordion
- [x] Meta tags para SEO e redes sociais
- [x] Validação de formulários
- [x] Feedback visual de loading/success/error

### 🔄 Roadmap

- [ ] Painel administrativo para gerenciar mensagens e inscrições
- [ ] Integração com API do servidor Minecraft para status em tempo real
- [ ] Sistema de notícias/blog
- [ ] Galeria de screenshots do servidor
- [ ] Sistema de votação/ranking
- [ ] Integração com Discord

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Se você quer ajudar a melhorar o site do Oblivium:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Diretrizes

- Siga os padrões de código existentes (TypeScript + ESLint)
- Mantenha os componentes pequenos e focados
- Adicione comentários em português para código complexo
- Teste suas mudanças em diferentes dispositivos
- Garanta que `npm run typecheck` e `npm run lint` passem

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

- **Discord**: [discord.gg/oblivium](https://discord.gg/oblivium)
- **E-mail**: contato@oblivium.com.br
- **Site**: [oblivium.com.br](https://oblivium.com.br)

## 🙏 Agradecimentos

- Comunidade Minecraft brasileira pela inspiração
- [React](https://react.dev/) e [Vite](https://vitejs.dev/) pelas ferramentas incríveis
- [Supabase](https://supabase.com/) pela plataforma backend robusta
- [Tailwind CSS](https://tailwindcss.com/) pelo sistema de design eficiente

---

<div align="center">

**Feito com ❤️ pela equipe Oblivium**

*Reviva a nostalgia do Minecraft 1.5.2*

</div>
