import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Componente de FAQ
 * Perguntas frequentes com accordion interativo
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Por que a versão 1.5.2?',
      answer: 'A versão 1.5.2 representa a era de ouro do Minecraft para muitos jogadores. Era uma época onde o jogo tinha a essência pura de sobrevivência, sem as distrações de recursos mais modernos. Queremos trazer de volta essa nostalgia e simplicidade que tornaram o Minecraft tão especial.',
    },
    {
      question: 'O servidor é realmente só para adultos?',
      answer: 'Sim! O Oblivium é focado em jogadores adultos que buscam uma experiência mais madura e tranquila. Nossa comunidade é composta por pessoas que trabalham durante o dia e querem relaxar jogando à noite, com conversas adultas e sem drama infantil.',
    },
    {
      question: 'Preciso de algum mod ou cliente especial?',
      answer: 'Não! Você só precisa do Minecraft Java Edition 1.5.2 vanilla. Não são necessários mods ou modificações. Apenas baixe a versão 1.5.2 no launcher oficial e conecte-se ao servidor.',
    },
    {
      question: 'Como faço para me conectar ao servidor?',
      answer: 'É simples! Abra seu Minecraft 1.5.2, vá em "Multiplayer", clique em "Add Server" e digite o IP: oblivium.com.br. Depois é só clicar em "Join Server" e começar a jogar!',
    },
    {
      question: 'Existe proteção contra griefing?',
      answer: 'Absolutamente! Temos um sistema anti-grief completo. Você pode proteger suas construções usando comandos simples. Além disso, nossa equipe de moderação está sempre atenta e age rapidamente contra qualquer comportamento malicioso.',
    },
    {
      question: 'Posso jogar PVP ou é apenas survival?',
      answer: 'Temos ambos! O mundo principal é survival com PVP opcional em zonas específicas. Também temos arenas dedicadas exclusivamente para PVP, onde você pode testar suas habilidades em combate sem risco de perder seus itens do survival.',
    },
    {
      question: 'O servidor vai ter lag por ser hospedado no Brasil?',
      answer: 'Muito pelo contrário! Como o servidor está hospedado no Brasil, jogadores brasileiros terão ping extremamente baixo (geralmente abaixo de 20ms). Isso significa menos lag e uma experiência muito mais fluida do que servidores internacionais.',
    },
    {
      question: 'Haverá resets ou wipes no servidor?',
      answer: 'Não planejamos fazer wipes regulares. O mundo é permanente e suas construções estarão sempre seguras. Em caso de necessidade extrema de reset, a comunidade será consultada com muita antecedência e haverá compensações.',
    },
    {
      question: 'Como funciona a economia do servidor?',
      answer: 'Temos uma economia equilibrada baseada em recursos do jogo. Você pode ganhar dinheiro vendendo itens em lojas, completando missões, participando de eventos ou negociando com outros jogadores. O sistema é projetado para ser justo e não pay-to-win.',
    },
    {
      question: 'Posso criar um clã ou grupo?',
      answer: 'Sim! Temos um sistema completo de clãs onde você pode criar ou entrar em grupos, compartilhar recursos, proteger territórios em conjunto e até participar de guerras entre clãs nos eventos especiais.',
    },
    {
      question: 'Que tipo de eventos vocês organizam?',
      answer: 'Organizamos diversos eventos semanais: boss fights épicas, caça ao tesouro, competições de construção, torneios PVP ranqueados, guerras entre clãs e muito mais. Sempre há algo novo e emocionante acontecendo!',
    },
    {
      question: 'Como posso reportar problemas ou tirar dúvidas?',
      answer: 'Você pode entrar em contato através do Discord (suporte 24/7), usar o sistema de tickets in-game ou enviar uma mensagem pelo formulário de contato no site. Nossa equipe está sempre pronta para ajudar!',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#201e1d] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FC4C01' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perguntas <span className="text-[#FC4C01]">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Encontre respostas para as dúvidas mais comuns sobre o Oblivium
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#2f2b29] border-2 border-[#FC4C01]/20 rounded-lg overflow-hidden hover:border-[#FC4C01]/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#201e1d]/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-[#FC4C01]" size={24} />
                  ) : (
                    <ChevronDown className="text-[#FC4C01]" size={24} />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-12 text-center bg-[#2f2b29] border-2 border-[#FC4C01]/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-400 mb-6">
            Nossa equipe está pronta para ajudar você no Discord!
          </p>
          <button className="bg-[#FC4C01] hover:bg-[#FC4C01]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105">
            Falar com Suporte
          </button>
        </div>
      </div>
    </section>
  );
}
