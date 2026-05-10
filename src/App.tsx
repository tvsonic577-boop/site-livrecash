/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Smartphone, 
  LayoutDashboard, 
  Mail,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import { cn } from './lib/utils';

const HEADER_LINKS = [
  { name: 'O Problema', href: '#problema' },
  { name: 'A Solução', href: '#solucao' },
  { name: 'O App', href: 'https://livrecash-215690994670.us-east1.run.app/' },
  { name: 'Suporte', href: 'https://wa.me/5562996346075?text=quero%20ser%20livre%20cash' },
];

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    {
      title: "Painel de Controle",
      description: "Tenha o raio-x do seu faturamento em tempo real. Veja quanto cashback foi distribuído e seu volume de vendas sem planilhas.",
      icon: <LayoutDashboard className="w-6 h-6" />,
      highlight: "Visão do Lojista",
      color: "from-green-500/20 to-emerald-500/5",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Registro de Vendas",
      description: "Lançar um cashback leva 10 segundos. Digite o CPF, o valor da venda e pronto. O sistema calcula tudo sozinho.",
      icon: <Smartphone className="w-6 h-6" />,
      highlight: "Visão do Vendedor",
      color: "from-blue-500/20 to-indigo-500/5",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Gestão de Clientes",
      description: "Saiba quem são seus melhores clientes. Quem gasta mais? Quem não volta há 30 dias? Recupere clientes com um clique.",
      icon: <Users className="w-6 h-6" />,
      highlight: "Visão Estratégica",
      color: "from-purple-500/20 to-fuchsia-500/5",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Relatório de Receita",
      description: "Transparência total sobre taxas e rendimento. Veja a previsão de taxas e o crescimento do seu ecossistema.",
      icon: <TrendingUp className="w-6 h-6" />,
      highlight: "Visão Financeira",
      color: "from-emerald-500/20 to-teal-500/5",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-green-500 selection:text-zinc-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
              <span className="text-zinc-950 font-display font-bold text-lg">L</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Livre Cash</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {HEADER_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-zinc-400 hover:text-green-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a 
            id="cta-header" 
            href="https://www.livrecash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-600 text-zinc-950 font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)] block"
          >
            Começar Agora
          </a>
        </nav>
      </header>

      <main>
        {/* Section 1: The Hook */}
        <section id="problema" className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/30 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                Seu cliente é fiel ou ele <br className="hidden md:block" /> 
                <span className="text-green-500 italic font-medium">apenas passou</span> por aqui?
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Conquistar um novo cliente custa 7x mais caro do que manter um antigo. 
                Por que você continua focando apenas na venda única?
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl group flex items-center justify-center">
                <div className="absolute inset-0 bg-zinc-950/40 z-10 pointer-events-none" />
                
                {/* Video Placeholder */}
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
                >
                  {/* <source src="" type="video/mp4" /> */}
                  Seu navegador não suporta vídeos.
                </video>

                <div className="absolute z-20 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-green-500/90 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 cursor-pointer">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-zinc-950 border-b-[10px] border-b-transparent ml-1" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">Vídeo Explicativo</span>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-2xl font-display font-semibold text-green-500">O Livre Cash fecha esse buraco.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: The Solution */}
        <section id="solucao" className="py-24 bg-zinc-900/40 border-y border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Transforme descontos frios em <br />
                  <span className="text-green-500">relacionamentos quentes.</span>
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  Diferente de um desconto comum que apenas diminui sua margem, o Livre Cash dá um motivo real para o seu cliente voltar. 
                  Ele não ganha um desconto agora; ele ganha um <span className="text-zinc-100 font-semibold underline decoration-green-500/50">crédito</span> para usar amanhã no seu estabelecimento.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Frequência de compra aumentada em até 40%",
                    "Fidelização genuína sem queimar margem",
                    "Base de dados qualificada dos seus clientes"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />
                  </div>
                  <h3 className="font-bold text-lg">Desconto Comum</h3>
                  <p className="text-sm text-zinc-400">É um adeus ao seu lucro. O cliente compra e não tem motivo sistêmico para retornar.</p>
                </div>
                <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 space-y-4 mt-8">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="font-bold text-lg">Livre Cash</h3>
                  <p className="text-sm text-zinc-400">É um investimento. O crédito retido garante que o dinheiro "viva" no seu caixa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Tour/App Showcase */}
        <section id="app" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Tour pela Experiência</h2>
            <p className="text-zinc-400 text-lg">Simplicidade e inteligência em cada tela do seu novo ecossistema.</p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {screens.map((screen, i) => (
                <button
                  id={`screen-trigger-${i}`}
                  key={i}
                  onClick={() => setActiveScreen(i)}
                  className={cn(
                    "w-full text-left p-6 rounded-2xl transition-all duration-300 border flex items-start gap-4 group",
                    activeScreen === i 
                      ? "bg-zinc-900 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.05)]" 
                      : "bg-transparent border-transparent grayscale hover:grayscale-0 hover:bg-zinc-900/50"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                    activeScreen === i ? "bg-green-500 text-zinc-950" : "bg-zinc-800 text-zinc-400 group-hover:text-zinc-200"
                  )}>
                    {screen.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-500 mb-1 block">{screen.highlight}</span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-100">{screen.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{screen.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className={cn("absolute inset-0 bg-gradient-to-br", screens[activeScreen].color)}
                >
                  <div className="h-full w-full p-8 flex flex-col justify-center items-center">
                    <img 
                      src={screens[activeScreen].image} 
                      alt={screens[activeScreen].title}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Section 4: Mascot */}
        <section className="py-24 relative bg-zinc-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-800/50 to-zinc-900 border border-zinc-700/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full -mr-20 -mt-20" />
              
              <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative">
                <div className="absolute inset-0 bg-green-500/20 blur-3xl opacity-50" />
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-zinc-800 flex items-center justify-center border border-zinc-700">
                   <div className="text-center p-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                      <Users className="w-12 h-12 text-zinc-950" />
                    </div>
                    <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Seu Embaixador</span>
                    <h3 className="text-xl font-bold font-display">Time Livre Cash</h3>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-widest mb-4 border border-green-500/20">
                  Nosso Mascote
                </span>
                <h2 className="text-4xl font-display font-bold mb-6">Expert Tech ao seu lado.</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Nossa equipe de consultores digitais está pronta para guiar sua transição para o novo varejo. 
                  Tecnologia amigável, humana e focada no seu crescimento.
                </p>
                <div className="flex items-center gap-4 text-zinc-300 font-medium italic">
                  <div className="w-12 h-0.5 bg-green-500" />
                  "Fidelizar é criar uma ponte ininterrupta com quem ama sua marca."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Closing/CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-green-500/5 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
                Pronto para parar de <br className="hidden md:block" />
                <span className="text-green-500">perder dinheiro?</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                O Livre Cash não é um custo, é o seu melhor investimento em marketing. 
                Fidelize seu público e fature mais.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  id="cta-footer" 
                  href="https://www.livrecash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-green-500 hover:bg-green-600 text-zinc-950 font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2"
                >
                  Começar Agora <ArrowRight className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/5562996346075?text=quero%20ser%20livre%20cash" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  Falar com Suporte <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800/50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                <span className="text-zinc-950 font-display font-bold text-sm">L</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight">Livre Cash</span>
            </div>
            
            <div className="flex gap-8 text-sm text-zinc-500 font-medium">
              <a href="#" className="hover:text-zinc-300 transition-colors">Termos</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacidade</a>
              <a 
                href="https://wa.me/5562996346075?text=quero%20ser%20livre%20cash" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300 transition-colors"
              >
                Suporte
              </a>
            </div>

            <div className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Livre Cash. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
