# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Oblivium** website - a Brazilian Minecraft 1.5.2 server landing page built with React, TypeScript, Vite, and Supabase. The site is focused on attracting adult players interested in nostalgic survival gameplay, with a launch date of January 15, 2025.

The site is Portuguese (pt-BR) language by default.

## Common Commands

### Development
```bash
npm run dev              # Start Vite dev server
npm run build            # Production build
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run typecheck        # Type check without emitting files
```

### Environment Setup
The project requires Supabase environment variables in `.env`:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

## Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Minecraft-themed components
- **Backend**: Supabase (PostgreSQL with Row Level Security)
- **Icons**: Lucide React

### Application Structure

The app is a single-page application (SPA) with all sections rendered in sequence from `App.tsx`:
1. Navbar (sticky navigation)
2. Hero (with Minecraft cube animations)
3. About
4. Features
5. Gameplay
6. Community
7. FAQ
8. Newsletter (with Supabase integration)
9. Contact (with Supabase integration)
10. Footer

### Key Components

**Minecraft-themed decorative components** (these create the visual aesthetic):
- `FloatingCubes.tsx` - Animated 3D cubes in background
- `MinecraftCube.tsx` - Individual 3D cube component
- `MinecraftBlock.tsx` - Block-style decorative elements
- `MinecraftParticles.tsx` - Particle effects

**Functional components with Supabase integration**:
- `Newsletter.tsx` - Handles email subscriptions (inserts into `newsletter_subscribers` table)
- `Contact.tsx` - Handles contact form submissions (inserts into `contact_messages` table)

### Supabase Integration

**Database schema** is defined in `supabase/migrations/20251104120824_create_oblivium_tables.sql`:

**Tables**:
1. `newsletter_subscribers` - Email subscriptions
   - Has unique constraint on email
   - Public insert/read policies enabled
2. `contact_messages` - Contact form submissions
   - Public insert policy enabled (no public read)
3. `server_status` - Minecraft server status tracking
   - Public read policy enabled
   - Stores: online status, player count, max players, version

**Client initialization**: `src/lib/supabase.ts` exports:
- `supabase` client instance
- TypeScript types: `NewsletterSubscriber`, `ContactMessage`, `ServerStatus`

### Error Handling Patterns

**Newsletter component** handles Supabase unique constraint violations (error code `23505`) and shows user-friendly messages for duplicate emails.

**Contact form** validates and trims input before submission, with loading/success/error states.

Both forms show temporary status messages (5 second timeout) with visual feedback using Lucide icons.

### Styling Conventions

- Primary brand color: `#FC4C01` (orange/red used throughout)
- Background colors: `#201e1d` (dark) and `#2f2b29` (lighter dark)
- Consistent border styling: `border-2 border-[#FC4C01]/30`
- Hover effects: typically scale transforms and opacity changes
- Uses Tailwind responsive breakpoints: `sm:`, `md:`, `lg:`

### Component Comments

Code includes Portuguese comments explaining component purposes (e.g., "Componente de Newsletter", "Permite que usuários se inscrevam...").

## Development Notes

- Vite is configured to exclude `lucide-react` from optimization (`vite.config.ts`)
- TypeScript is configured with strict mode via separate configs for app and node code
- ESLint uses flat config format (`eslint.config.js`)
- All interactive forms use React's controlled component pattern with local state
