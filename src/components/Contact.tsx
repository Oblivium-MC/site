import { useState, FormEvent } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

/**
 * Componente de Contato
 * Formulário para envio de mensagens que são salvas no Supabase
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.toLowerCase().trim(),
            subject: formData.subject.trim() || null,
            message: formData.message.trim(),
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setStatusMessage('Mensagem enviada com sucesso! Responderemos em breve.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setStatusMessage('Erro ao enviar mensagem. Tente novamente.');
    }

    setTimeout(() => {
      setStatus('idle');
      setStatusMessage('');
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-[#2f2b29] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FC4C01' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-[#FC4C01]">Contato</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tem alguma dúvida ou sugestão? Envie uma mensagem para nossa equipe!
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-[#201e1d] border-2 border-[#FC4C01]/30 rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-lg bg-[#2f2b29] border-2 border-[#FC4C01]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#FC4C01] transition-colors disabled:opacity-50"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-lg bg-[#2f2b29] border-2 border-[#FC4C01]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#FC4C01] transition-colors disabled:opacity-50"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 rounded-lg bg-[#2f2b29] border-2 border-[#FC4C01]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#FC4C01] transition-colors disabled:opacity-50"
                placeholder="Sobre o que você quer falar?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-[#2f2b29] border-2 border-[#FC4C01]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#FC4C01] transition-colors disabled:opacity-50 resize-none"
                placeholder="Digite sua mensagem aqui..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-8 py-4 bg-[#FC4C01] hover:bg-[#FC4C01]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {statusMessage && (
              <div
                className={`p-4 rounded-lg flex items-center gap-2 ${
                  status === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {status === 'success' ? (
                  <Check size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
