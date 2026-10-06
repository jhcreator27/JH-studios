import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowRight, Target, Lightbulb, Compass, Award } from 'lucide-react';
import { initialTeamMembers } from '../../data/initialData';

export const About: React.FC = () => {
  const { setCurrentView } = useApp();
  const heroImage = '/src/assets/images/hero_marketing_studio_1791274361323.jpg';

  const timeline = [
    { year: '2014', title: 'Fondazione di JH studios', description: 'Nasce a Milano il primo studio di consulenza strategica e design.' },
    { year: '2018', title: 'Espansione Internazionale', description: 'Apertura degli avamposti a Parigi e Zurigo per servire clienti europei nel settore lusso e tech.' },
    { year: '2022', title: 'Divisione Digital & Performance', description: 'Integrazione di team dedicati all’advertising avanzato e ai funnel di conversione.' },
    { year: '2026', title: 'Agenzia Leader Globale', description: 'Oltre 150 progetti di successo completati e un team di 25+ specialisti senior.' }
  ];

  return (
    <div className="space-y-32 pb-24">
      {/* Hero */}
      <section className="relative pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Chi Siamo</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-4xl leading-[1.08]">
            Creatività, strategia e passione per <span className="text-amber-600">l’eccellenza digitale.</span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            Siamo un’agenzia creativa indipendente che unisce la sensibilità del design sartoriale alla potenza analitica del marketing moderno.
          </p>
        </div>
      </section>

      {/* Agency Presentation Image */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
          <img src={heroImage} alt="JH studios team" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">La Nostra Mission</h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
              Aiutare le aziende a esprimere il loro massimo potenziale attraverso strategie di comunicazione rigorose, identità visive memorabili e un’esperienza digitale senza pari. Crediamo che ogni brand meriti di distinguersi con eleganza e autenticità.
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">La Nostra Vision</h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
              Essere il punto di riferimento internazionale per l’innovazione nella comunicazione e nel digital marketing, anticipando i trend tecnologici e culturali per offrire ai nostri clienti un vantaggio competitivo duraturo.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-display">I nostri valori</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 dark:text-stone-50">
            Principi che guidano ogni nostro progetto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
            <div className="text-2xl font-display font-bold text-amber-600">01.</div>
            <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50">Attenzione ai Dettagli</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              Curiamo ogni pixel, ogni parola e ogni interazione con la massima cura artigianale, perché sono i dettagli a fare la differenza tra il buono e lo straordinario.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
            <div className="text-2xl font-display font-bold text-amber-600">02.</div>
            <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50">Rigore Analitico</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              La creatività senza dati è solo intuizione. Fondiamo ogni decisione strategica su analisi di mercato rigorose e metriche di performance verificabili.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
            <div className="text-2xl font-display font-bold text-amber-600">03.</div>
            <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50">Innovazione Continua</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              Esploriamo costantemente nuove tecnologie, linguaggi visivi e piattaforme digitali per mantenere i nostri clienti sempre un passo avanti.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-display">Leadership</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 dark:text-stone-50">
            Il nostro team senior
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initialTeamMembers.map(tm => (
            <div key={tm.id} className="group space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 relative">
                <img src={tm.image} alt={tm.name} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-display font-bold text-stone-900 dark:text-stone-50">{tm.name}</h3>
                <div className="text-xs font-semibold text-amber-600">{tm.role}</div>
                <p className="text-xs text-stone-600 dark:text-stone-400 pt-2 leading-relaxed">{tm.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-display">La nostra storia</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 dark:text-stone-50">
            Tappe fondamentali
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4 relative">
              <div className="text-3xl font-display font-bold text-amber-600">{item.year}</div>
              <h3 className="text-lg font-display font-bold text-stone-900 dark:text-stone-50">{item.title}</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-stone-900 text-stone-50 rounded-3xl p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Vuoi conoscere il nostro metodo?</h2>
          <p className="text-stone-400 max-w-xl mx-auto text-sm sm:text-base">
            Parliamo del tuo progetto e di come possiamo aiutarti a raggiungere i tuoi obiettivi aziendali.
          </p>
          <button
            onClick={() => setCurrentView('contact')}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>Contattaci ora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
