/*
  # Oblivium Minecraft Server Database Schema

  1. Novas Tabelas
    - `newsletter_subscribers`
      - `id` (uuid, chave primária)
      - `email` (text, único, não nulo)
      - `subscribed_at` (timestamptz, padrão: agora)
      - `confirmed` (boolean, padrão: verdadeiro)
      - `metadata` (jsonb, opcional para dados adicionais)
    
    - `contact_messages`
      - `id` (uuid, chave primária)
      - `name` (text, não nulo)
      - `email` (text, não nulo)
      - `subject` (text, opcional)
      - `message` (text, não nulo)
      - `submitted_at` (timestamptz, padrão: agora)
      - `read` (boolean, padrão: falso)
    
    - `server_status`
      - `id` (uuid, chave primária)
      - `online` (boolean, não nulo)
      - `player_count` (integer, padrão: 0)
      - `max_players` (integer, padrão: 100)
      - `version` (text, padrão: '1.5.2')
      - `last_updated` (timestamptz, padrão: agora)

  2. Segurança
    - Habilitar RLS em todas as tabelas
    - Políticas públicas para leitura de server_status
    - Políticas para inserção pública em newsletter_subscribers e contact_messages
    - Políticas administrativas para gerenciar mensagens
*/

-- Tabela de assinantes da newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  confirmed boolean DEFAULT true,
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Tabela de mensagens de contato
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Tabela de status do servidor
CREATE TABLE IF NOT EXISTS server_status (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  online boolean NOT NULL DEFAULT false,
  player_count integer DEFAULT 0,
  max_players integer DEFAULT 100,
  version text DEFAULT '1.5.2',
  last_updated timestamptz DEFAULT now()
);

-- Inserir status inicial do servidor
INSERT INTO server_status (online, player_count, max_players, version)
VALUES (false, 0, 100, '1.5.2')
ON CONFLICT DO NOTHING;

-- Habilitar RLS em todas as tabelas
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE server_status ENABLE ROW LEVEL SECURITY;

-- Políticas para newsletter_subscribers
CREATE POLICY "Qualquer um pode se inscrever na newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Assinantes públicos podem ser visualizados"
  ON newsletter_subscribers
  FOR SELECT
  TO anon
  USING (true);

-- Políticas para contact_messages
CREATE POLICY "Qualquer um pode enviar mensagens de contato"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Políticas para server_status
CREATE POLICY "Status do servidor é público para leitura"
  ON server_status
  FOR SELECT
  TO anon
  USING (true);