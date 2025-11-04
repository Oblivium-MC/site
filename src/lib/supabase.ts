import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type NewsletterSubscriber = {
  id: string;
  email: string;
  subscribed_at: string;
  confirmed: boolean;
  metadata: Record<string, any>;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  submitted_at: string;
  read: boolean;
};

export type ServerStatus = {
  id: string;
  online: boolean;
  player_count: number;
  max_players: number;
  version: string;
  last_updated: string;
};
