import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowRight, CheckCircle2, Layers, HelpCircle, ArrowLeft, ChevronRight, Zap } from 'lucide-react';
import { Service } from '../../types';

export const Services: React.FC = () => {
  const { services, setCurrentView, projects } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<string>('Tutti');
  const [activeServiceDetail, setActiveServiceDetail] = useState<Service | null>(null);

  // Service Finder state
  const [finderGoal, setFinderGoal] = useState<string>('social');

  const filters = ['Tutti', 'Strategia', 'Comunicazione', 'Design', 'Visual'];

  const filteredServices = selectedFilter === 'Tutti'
    ? services
    : services.filter(s => s.category === selectedFilter);

  const finderGoals = [
    { id: 'brand', label: 'Vogliono far conoscere il brand', matched: ['Marketing Strategy', 'Branding', 'Advertising'] },
    { id: 'social', label: 'Vogliono migliorare i social', matched: ['Social Media Strategy', 'Social Media Management', 'Content Creation', 'Advertising'] },
    { id: 'identity', label: 'Vogliono creare una nuova identità', matched: ['Branding', 'Graphic Design'] },
    { id: 'web', label: 'Vogliono migliorare il mio sito', matched: ['Web Design', 'Digital Strategy'] },
    { id: 'leads', label: 'Vogliono trovare nuovi clienti', matched: ['Marketing Strategy', 'Advertising', 'Digital Strategy'] },
    { id: 'content', label: 'Vogliono creare contenuti', matched: ['Content Creation', 'Product Photography', 'Social Media Management'] },
    { id: 'products', label: 'Vogliono vendere meglio i prodotti', matched: ['Product Photography', 'Advertising', 'Marketing Strategy'] }
  ];

  const currentFinderResult = finderGoals.find(g => g.id === finderGoal) || finderGoals[0];

  const combos = [
    {
      title: 'BRAND LAUNCH',
      desc: 'Il pacchetto completo per lanciare sul mercato un nuovo marchio con basi solide e un’immagine d’elite.',
      services: ['Branding', 'Graphic Design', 'Web Design', 'Digital Strategy']
    },
    {
      title: 'SOCIAL GROWTH',
      desc: 'Accelerazione della presenza social, acquisizione follower mirati e conversione in lead.',
      services: ['Social Media Strategy', 'Social Media Management', 'Content Creation', 'Advertising']
    },
    {
      title: 'PRODUCT VISIBILITY',
      desc: 'Massima valorizzazione visiva dei prodotti per e-commerce e campagne adv ad alto impatto.',
      services: ['Product Photography', 'Content Creation', 'Social Media', 'Advertising']
    }
  ];

  if (activeServiceDetail) {
    const relatedProjects = projects.filter(p => p.servicesUsed?.includes(activeServiceDetail.title) || true).slice(0, 2);
    const relatedServices = services.filter(s => s.id !== activeServiceDetail.id && s.category === activeServiceDetail.category).slice(0, 2);

    return (
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20 animate-in fade-in duration-200">
        <button
          onClick={() => setActiveServiceDetail(null)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-red-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a tutti i servizi</span>
        </button>

        {/* Service Hero */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-red-600 bg-red-500/10 px-3 py-1 rounded-md">
              {activeServiceDetail.number} / {activeServiceDetail.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-stone-900 dark:text-stone-50 leading-[1.08]">
            {activeServiceDetail.title}
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed font-serif italic">
            "{activeServiceDetail.fullDescription}"
          </p>
        </div>

        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <img src={activeServiceDetail.image} alt={activeServiceDetail.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-red-600">Il Problema</div>
            <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50">Cosa risolviamo</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              {activeServiceDetail.problem || 'Spesso le aziende faticano a emergere a causa di processi non strutturati e mancanza di coordinamento tra i canali.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-red-400">La Soluzione</div>
            <h3 className="text-xl font-display font-bold text-stone-100">Il metodo JH studios</h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {activeServiceDetail.solution || 'Un approccio sartoriale basato su analisi rigorose, creatività di alto livello e focus costante sul ritorno dell’investimento.'}
            </p>
          </div>
        </div>

        {/* What's included (Features & Benefits) */}
        <div className="space-y-8">
          <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">Cosa comprende il servizio</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeServiceDetail.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                <span className="font-medium text-stone-800 dark:text-stone-200 text-sm">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        {activeServiceDetail.process && activeServiceDetail.process.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">Il Processo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeServiceDetail.process.map((step, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
                  <div className="text-2xl font-display font-bold text-red-600">{step.step}</div>
                  <h4 className="font-display font-bold text-stone-900 dark:text-stone-50">{step.title}</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {activeServiceDetail.faqs && activeServiceDetail.faqs.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">Domande Frequenti (FAQ)</h3>
            <div className="space-y-4">
              {activeServiceDetail.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
                  <h4 className="font-display font-bold text-stone-900 dark:text-stone-50 text-base">{faq.q}</h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Box */}
        <div className="bg-stone-900 text-stone-50 rounded-3xl p-12 text-center space-y-6">
          <h3 className="text-3xl font-display font-bold">Hai bisogno di questo servizio?</h3>
          <p className="text-stone-400 max-w-lg mx-auto text-sm">
            Parliamo del tuo progetto e di come possiamo integrarlo nella tua strategia di crescita.
          </p>
          <button
            onClick={() => setCurrentView('contact')}
            className="px-8 py-4 bg-red-600 hover:bg-red-500 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>Parliamo del tuo progetto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-36 pb-24">
      {/* 1. HERO — I NOSTRI SERVIZI */}
      <section className="relative pt-20 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>JH STUDIOS / SERVIZI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-5xl leading-[1.08]">
            Strategia, creatività e strumenti per <span className="text-red-600">far crescere il tuo brand.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
            Dalla strategia alla comunicazione, costruiamo soluzioni su misura per trasformare idee e obiettivi in risultati concreti.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => setCurrentView('contact')}
              className="px-8 py-4 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-xl font-semibold text-sm hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-sm inline-flex items-center justify-center gap-2"
            >
              <span>Inizia un progetto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('processo');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-stone-200/70 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center"
            >
              Scopri il nostro metodo
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILTERS & SERVICE GRID INTERATTIVA */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/60 dark:bg-stone-900 rounded-2xl w-fit">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${
                selectedFilter === filter
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              onClick={() => setActiveServiceDetail(service)}
              className="group cursor-pointer p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between space-y-8 hover:-translate-y-1 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-red-600 bg-red-500/10 px-3 py-1 rounded-full">
                    {service.number} / {service.category}
                  </span>
                  <Zap className="w-4 h-4 text-red-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-red-600">
                <span>Scopri {service.title} →</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICE FINDER INTERATTIVO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-stone-900 text-stone-50 rounded-3xl p-10 sm:p-16 border border-stone-800 space-y-10 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-red-400 text-xs font-mono">
              <HelpCircle className="w-4 h-4" />
              <span>Service Finder</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              Non sai quale servizio ti serve?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              Seleziona il tuo obiettivo principale per scoprire i servizi più adatti alle tue esigenze.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {finderGoals.map(goal => (
              <button
                key={goal.id}
                onClick={() => setFinderGoal(goal.id)}
                className={`p-4 rounded-2xl text-left text-xs font-semibold transition-all border ${
                  finderGoal === goal.id
                    ? 'bg-red-600 border-red-500 text-white shadow-lg'
                    : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-800'
                }`}
              >
                {goal.label}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-stone-950 border border-stone-800 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-red-400">Servizi Consigliati per il tuo obiettivo:</div>
            <div className="flex flex-wrap gap-3">
              {currentFinderResult.matched.map((matchTitle, mIdx) => (
                <div key={mIdx} className="px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>{matchTitle}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setCurrentView('contact')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300"
              >
                <span>Parliamo della tua esigenza →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMBINAZIONE DEI SERVIZI */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600 font-display">Soluzioni integrate</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            I risultati migliori nascono dalle combinazioni giuste.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo, idx) => (
            <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-red-600 font-semibold px-3 py-1 bg-red-500/10 rounded-full">Package 0{idx + 1}</span>
                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">{combo.title}</h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{combo.desc}</p>
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">Servizi inclusi:</div>
                  <ul className="space-y-1">
                    {combo.services.map((cs, sIdx) => (
                      <li key={sIdx} className="text-xs text-stone-700 dark:text-stone-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                        <span>{cs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setCurrentView('contact')}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-xl text-xs font-semibold transition-colors shadow-sm"
              >
                Richiedi pacchetto
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROCESSO (“Come lavoriamo”) */}
      <section id="processo" className="max-w-7xl mx-auto px-6 space-y-16 scroll-mt-32">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600 font-display">Metodo</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Come lavoriamo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <div className="text-3xl font-display font-bold text-red-600">01</div>
            <h3 className="font-display font-bold text-stone-900 dark:text-stone-50">Ascoltiamo</h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">Comprendiamo il brand, il mercato e gli obiettivi.</p>
          </div>
          <div className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <div className="text-3xl font-display font-bold text-red-600">02</div>
            <h3 className="font-display font-bold text-stone-900 dark:text-stone-50">Analizziamo</h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">Studiamo pubblico, competitor e opportunità.</p>
          </div>
          <div className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <div className="text-3xl font-display font-bold text-red-600">03</div>
            <h3 className="font-display font-bold text-stone-900 dark:text-stone-50">Strategia</h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">Definiamo una direzione chiara e misurabile.</p>
          </div>
          <div className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <div className="text-3xl font-display font-bold text-red-600">04</div>
            <h3 className="font-display font-bold text-stone-900 dark:text-stone-50">Creiamo</h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">Trasformiamo la strategia in contenuti, design e campagne.</p>
          </div>
          <div className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
            <div className="text-3xl font-display font-bold text-red-600">05</div>
            <h3 className="font-display font-bold text-stone-900 dark:text-stone-50">Ottimizziamo</h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">Analizziamo i risultati e miglioriamo continuamente.</p>
          </div>
        </div>
      </section>

      {/* 6. CTA FINALE */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-50 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-stone-800">
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500 font-display font-mono">Inizia il tuo percorso</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              Qual è la prossima cosa che vuoi costruire?
            </h2>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Raccontaci dove vuoi arrivare. Troveremo insieme la strategia, gli strumenti e i servizi più adatti per arrivarci.
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
