import { useState, FormEvent } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

/**
 * Componente de Newsletter
 * Permite que usuários se inscrevam para receber atualizações via Supabase
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage('Este e-mail já está cadastrado!');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage('Inscrição realizada com sucesso!');
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage('Erro ao processar inscrição. Tente novamente.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#2f2b29] to-[#201e1d] relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FC4C01' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FC4C01]/10 to-[#FC4C01]/5 border-2 border-[#FC4C01]/30 rounded-lg p-8 md:p-12 text-center">
          <div className="inline-flex p-4 bg-[#FC4C01]/20 rounded-full mb-6">
            <Mail className="text-[#FC4C01]" size={40} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fique Por Dentro!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Inscreva-se na nossa newsletter e seja o primeiro a receber atualizações sobre o lançamento,
            eventos especiais e novidades exclusivas do Oblivium.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                disabled={status === 'loading'}
                className="flex-1 px-6 py-4 rounded-lg bg-[#2f2b29] border-2 border-[#FC4C01]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#FC4C01] transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-[#FC4C01] hover:bg-[#FC4C01]/90 text-white font-semibold rounded-lg transition-all duration-200 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? 'Inscrevendo...' : 'Inscrever-se'}
              </button>
            </div>

            {message && (
              <div
                className={`mt-4 p-4 rounded-lg flex items-center justify-center gap-2 ${
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
                <span>{message}</span>
              </div>
            )}
          </form>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">📧</div>
              <p className="text-gray-400 text-sm">Atualizações de Lançamento</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🎁</div>
              <p className="text-gray-400 text-sm">Recompensas Exclusivas</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🎪</div>
              <p className="text-gray-400 text-sm">Avisos de Eventos</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
}
