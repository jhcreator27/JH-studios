import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Sparkles, TrendingUp, Award, Users, CheckCircle, ChevronLeft, ChevronRight, Layers, Target, Compass, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const { setCurrentView, services, projects, blogPosts, testimonials } = useApp();
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const heroImage = '/src/assets/images/hero_marketing_studio_1791274361323.jpg';
  const activeTestimonials = testimonials.filter(t => t.visible !== false);

  const nextTestimonial = () => {
    if (activeTestimonials.length === 0) return;
    setActiveTestimonialIdx((prev) => (prev + 1) % activeTestimonials.length);
  };

  const prevTestimonial = () => {
    if (activeTestimonials.length === 0) return;
    setActiveTestimonialIdx((prev) => (prev - 1 + activeTestimonials.length) % activeTestimonials.length);
  };

  return (
    <div className="space-y-36 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 md:pt-28 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                <span>Agenzia Creativa & Digital Strategy</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08]">
                Trasformiamo idee in strategie che <span className="text-red-600 dark:text-red-500">lasciano il segno.</span>
              </h1>
              <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
                JH studios è un'agenzia creativa e di marketing che unisce strategia, design e contenuti per trasformare brand e idee in esperienze memorabili.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentView('services')}
                  className="px-8 py-4 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-xl font-semibold text-sm hover:bg-stone-800 dark:hover:bg-stone-200 transition-all flex items-center justify-center gap-3 shadow-sm group"
                >
                  <span>Scopri i nostri servizi</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentView('contact')}
                  className="px-8 py-4 bg-stone-200/70 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center"
                >
                  Parliamo del tuo progetto
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 group">
                <img
                  src={heroImage}
                  alt="JH studios creative office"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent flex items-end p-8">
                  <div className="text-white space-y-1">
                    <div className="text-xs font-semibold tracking-wider text-red-400 uppercase font-mono">Milano / Parigi / Zurigo</div>
                    <div className="text-lg font-display font-bold">Laboratorio di Comunicazione Globale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID DEI SERVIZI */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-500 font-display">Competenze d'eccellenza</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
              Bento Grid dei Servizi
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:text-red-600 transition-colors"
          >
            <span>Tutti i servizi (10)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Marketing Strategy (Span 2) */}
          <div
            onClick={() => setCurrentView('services')}
            className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-red-500/50 transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-red-600 font-semibold px-3 py-1 bg-red-500/10 rounded-full">01 / Strategy</span>
                <Zap className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-red-600 transition-colors">
                Marketing Strategy
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed max-w-md">
                Pianificazione strategica omnicanale per accelerare la crescita del brand e massimizzare il ROI attraverso analisi rigorose.
              </p>
            </div>
            <div className="pt-8 flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-red-600 transition-colors relative z-10">
              <span>Esplora servizio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Social Media */}
          <div
            onClick={() => setCurrentView('services')}
            className="p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-red-500/50 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono text-stone-400 font-semibold">02</div>
              <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-red-600 transition-colors">
                Social Media
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                Gestione professionale dei canali social per costruire community ingaggiate e autorevoli.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-red-600 transition-colors">
              <span>Scopri</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Branding */}
          <div
            onClick={() => setCurrentView('services')}
            className="p-8 sm:p-10 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 hover:border-red-500/50 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono text-red-500 font-semibold">03 / Identity</div>
              <h3 className="text-xl font-display font-bold text-stone-100 group-hover:text-red-400 transition-colors">
                Branding
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Costruzione di identità di marca memorabili, valoriali e visivamente straordinarie.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-100 group-hover:text-red-400 transition-colors">
              <span>Scopri</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Graphic Design */}
          <div
            onClick={() => setCurrentView('services')}
            className="p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-red-500/50 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono text-stone-400 font-semibold">04</div>
              <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-red-600 transition-colors">
                Graphic Design
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                Design visivo d’impatto per comunicare l’identità aziendale con eleganza e coerenza.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-red-600 transition-colors">
              <span>Scopri</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Web Design (Span 2) */}
          <div
            onClick={() => setCurrentView('services')}
            className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-red-500/50 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono text-red-600 font-semibold px-3 py-1 bg-red-500/10 rounded-full w-fit">05 / Digital</div>
              <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-red-600 transition-colors">
                Web Design & UX/UI
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed max-w-md">
                Siti web e piattaforme digitali sartoriali, veloci, responsive e orientate alla conversione per un'esperienza utente senza compromessi.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-red-600 transition-colors">
              <span>Esplora servizio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Content Creation */}
          <div
            onClick={() => setCurrentView('services')}
            className="p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-red-500/50 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono text-stone-400 font-semibold">06</div>
              <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-red-600 transition-colors">
                Content Creation
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                Produzione di contenuti multimediali originali, narrativi ed emozionanti.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-red-600 transition-colors">
              <span>Scopri</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 7: Advertising */}
          <div
            onClick={() => setCurrentView('services')}
            className="p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-red-500/50 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono text-stone-400 font-semibold">07</div>
              <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-red-600 transition-colors">
                Advertising
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                Campagne pubblicitarie mirate su Google, Meta e LinkedIn ad alto ritorno sull'investimento.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-red-600 transition-colors">
              <span>Scopri</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGETTI IN EVIDENZA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-500 font-display">Showcase</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
              Progetti in evidenza
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('portfolio')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:text-red-600 transition-colors"
          >
            <span>Vedi tutti i progetti →</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.slice(0, 4).map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setCurrentView('portfolio')}
              className={`group cursor-pointer space-y-6 ${idx % 2 === 1 ? 'lg:mt-16' : ''}`}
            >
              <div className="aspect-[16/11] rounded-3xl overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-stone-100 px-3.5 py-1.5 rounded-full text-xs font-medium font-mono">
                  {project.category}
                </div>
              </div>
              <div className="space-y-2 px-2">
                <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
                  <span>{project.client}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400 group-hover:underline">
                    Scopri il progetto <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NUMERI DELL'AGENZIA */}
      <section className="bg-stone-900 text-stone-100 py-24 my-16 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500 font-display">Impatto & Risultati</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              I numeri di JH studios
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 space-y-2">
              <div className="text-4xl sm:text-6xl font-display font-bold text-red-500">50+</div>
              <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-medium">Progetti realizzati</div>
            </div>
            <div className="p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 space-y-2">
              <div className="text-4xl sm:text-6xl font-display font-bold text-stone-100">30+</div>
              <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-medium">Brand supportati</div>
            </div>
            <div className="p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 space-y-2">
              <div className="text-4xl sm:text-6xl font-display font-bold text-stone-100">5+</div>
              <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-medium">Anni di esperienza</div>
            </div>
            <div className="p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 space-y-2">
              <div className="text-4xl sm:text-6xl font-display font-bold text-red-500">100%</div>
              <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-medium">Passione per il lavoro</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIANZE ("Dicono di noi") */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-500 font-display">Social Proof</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
              Dicono di noi
            </h2>
          </div>
          {activeTestimonials.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Precedente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Successivo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {activeTestimonials.length > 0 && (
          <div className="p-10 sm:p-16 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 relative overflow-hidden shadow-xl">
            <div className="max-w-3xl space-y-8">
              <p className="text-xl sm:text-2xl font-display text-stone-800 dark:text-stone-200 leading-relaxed italic">
                "{activeTestimonials[activeTestimonialIdx].content}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-300 dark:bg-stone-800 shrink-0 border border-stone-300 dark:border-stone-700">
                  <img
                    src={activeTestimonials[activeTestimonialIdx].avatar}
                    alt={activeTestimonials[activeTestimonialIdx].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 dark:text-stone-50 text-base">
                    {activeTestimonials[activeTestimonialIdx].name}
                  </h4>
                  <div className="text-xs text-stone-500 font-mono">
                    {activeTestimonials[activeTestimonialIdx].role}, {activeTestimonials[activeTestimonialIdx].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. CTA FINALE */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-50 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-stone-800">
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500 font-display font-mono">Inizia il tuo percorso</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              Hai un’idea? Trasformiamola in qualcosa di concreto.
            </h2>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Raccontaci il tuo progetto. Costruiamo insieme una strategia capace di trasformare la tua idea in un risultato concreto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentView('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Inizia un progetto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentView('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-xl text-sm transition-colors border border-stone-700 flex items-center justify-center"
              >
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
