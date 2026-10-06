import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowRight, Target, Compass, Award, Users, CheckCircle, ChevronRight, Layers, Lightbulb, Shield, Linkedin } from 'lucide-react';
import { initialTeamMembers } from '../../data/initialData';

export const About: React.FC = () => {
  const { setCurrentView, generalSettings } = useApp();
  const heroImage = '/src/assets/images/hero_marketing_studio_1791274361323.jpg';

  const [activeTab, setActiveTab] = useState<string>('mission');

  const valuesList = [
    { num: '01', title: 'Creatività', desc: 'Cerchiamo idee originali capaci di distinguere ogni progetto.' },
    { num: '02', title: 'Strategia', desc: 'Ogni scelta creativa nasce da un obiettivo preciso e misurabile.' },
    { num: '03', title: 'Autenticità', desc: 'Costruiamo comunicazioni coerenti con l\'identità reale del brand.' },
    { num: '04', title: 'Collaborazione', desc: 'Lavoriamo insieme ai nostri clienti, trasformando il rapporto in una vera partnership.' },
    { num: '05', title: 'Qualità', desc: 'Prestiamo attenzione a ogni dettaglio, dalla strategia alla realizzazione finale.' },
    { num: '06', title: 'Evoluzione', desc: 'Studiamo continuamente nuovi strumenti, linguaggi e opportunità digitali.' }
  ];

  const timeline = [
    { year: '2021', title: 'Nasce JH studios', desc: 'L\'idea prende forma con l\'obiettivo di unire creatività e comunicazione digitale.' },
    { year: '2022', title: 'I primi progetti', desc: 'JH studios inizia a collaborare con realtà locali e piccoli brand ambiziosi.' },
    { year: '2023', title: 'Crescita e nuovi servizi', desc: 'L\'offerta si amplia con Social Media, Branding e Content Creation avanzata.' },
    { year: '2024', title: 'Una nuova identità', desc: 'L\'agenzia evolve il proprio metodo e rafforza il posizionamento strategico internazionale.' },
    { year: '2025', title: 'Nuove collaborazioni', desc: 'Nascono partnership creative di rilievo nel settore lusso e tech.' },
    { year: '2026', title: 'Il prossimo capitolo', desc: 'JH studios continua a crescere, sperimentare e costruire nuove direzioni.' }
  ];

  const differentiators = [
    { title: 'Strategia + Creatività', desc: 'Non separiamo strategia e creatività: lavorano in sinergia per generare impatto.' },
    { title: 'Approccio personalizzato', desc: 'Ogni progetto parte dalle esigenze specifiche, dal DNA e dagli obiettivi del cliente.' },
    { title: 'Visione a lungo termine', desc: 'Non puntiamo soltanto alla campagna del momento, ma alla crescita duratura del brand.' },
    { title: 'Relazione diretta', desc: 'Comunicazione semplice, trasparente e senza inutili livelli intermedi.' }
  ];

  return (
    <div className="space-y-36 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Chi Siamo · JH studios</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-5xl leading-[1.05]">
            Non creiamo semplicemente contenuti. <span className="text-red-600">Costruiamo direzioni.</span>
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
            JH studios è un’agenzia creativa e di marketing che combina strategia, comunicazione e design per aiutare brand e attività a crescere, distinguersi e lasciare il segno.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => setCurrentView('services')}
              className="px-8 py-4 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-xl font-semibold text-sm hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-sm inline-flex items-center justify-center gap-2"
            >
              <span>Scopri cosa facciamo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className="px-8 py-4 bg-stone-200/70 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center"
            >
              Parliamo del tuo progetto
            </button>
          </div>
        </div>
      </section>

      {/* Immersive Hero Image */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 relative">
          <img src={heroImage} alt="JH studios team at work" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Internal Jump Navigation */}
      <div className="max-w-7xl mx-auto px-6 sticky top-20 z-30 py-4 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-y border-stone-200 dark:border-stone-800 overflow-x-auto">
        <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 whitespace-nowrap">
          <a href="#presentazione" className="hover:text-red-600 transition-colors">In breve</a>
          <a href="#mission" className="hover:text-red-600 transition-colors">Mission</a>
          <a href="#vision" className="hover:text-red-600 transition-colors">Vision</a>
          <a href="#valori" className="hover:text-red-600 transition-colors">Valori</a>
          <a href="#team" className="hover:text-red-600 transition-colors">Team</a>
          <a href="#storia" className="hover:text-red-600 transition-colors">Percorso</a>
          <a href="#differenza" className="hover:text-red-600 transition-colors">Perché noi</a>
        </div>
      </div>

      {/* 2. PRESENTAZIONE ("JH studios, in breve.") */}
      <section id="presentazione" className="max-w-7xl mx-auto px-6 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-stone-200 dark:border-stone-800">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600 font-display">Chi siamo</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              JH studios, in breve.
            </h2>
          </div>
          <div className="lg:col-span-6 space-y-8">
            <p className="text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed font-serif italic">
              “Crediamo che una buona comunicazione non debba soltanto attirare attenzione, ma creare connessioni. Per questo uniamo strategia, creatività e tecnologia per costruire identità e progetti capaci di parlare alle persone.”
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-stone-200 dark:border-stone-800">
              <div>
                <div className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">50+</div>
                <div className="text-xs text-stone-500 mt-1">Progetti</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">30+</div>
                <div className="text-xs text-stone-500 mt-1">Clienti</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">10+</div>
                <div className="text-xs text-stone-500 mt-1">Settori</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">5+</div>
                <div className="text-xs text-stone-500 mt-1">Anni exp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION */}
      <section id="mission" className="max-w-7xl mx-auto px-6 scroll-mt-32">
        <div className="p-10 sm:p-20 rounded-3xl bg-stone-900 text-stone-50 border border-stone-800 relative overflow-hidden shadow-2xl space-y-8">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800 text-red-400 text-xs font-mono">
            <Target className="w-3.5 h-3.5" />
            <span>01 / Mission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
            La nostra mission
          </h2>
          <p className="text-xl sm:text-2xl text-stone-300 leading-relaxed font-serif max-w-4xl">
            “Trasformare idee, esigenze e ambizioni in strategie creative concrete, comprensibili e capaci di produrre valore.”
          </p>
        </div>
      </section>

      {/* 4. VISION */}
      <section id="vision" className="max-w-7xl mx-auto px-6 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-10 sm:p-20 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200 dark:bg-stone-800 text-red-600 dark:text-red-400 text-xs font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>02 / Vision</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
              La nostra visione
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              “Immaginiamo un marketing più umano, creativo e strategico, dove ogni brand possa trovare una voce autentica e costruire relazioni durature con il proprio pubblico.”
            </p>
          </div>
        </div>
      </section>

      {/* 5. VALORI */}
      <section id="valori" className="max-w-7xl mx-auto px-6 scroll-mt-32 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600 font-display">Principi guida</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            I valori che guidano il nostro lavoro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesList.map((v, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4 hover:border-red-500/50 transition-all group">
              <div className="text-3xl font-display font-bold text-red-600 group-hover:scale-105 transition-transform">{v.num}</div>
              <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">{v.title}</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TEAM SENIOR */}
      <section id="team" className="max-w-7xl mx-auto px-6 scroll-mt-32 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600 font-display">Leadership</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Le persone dietro i progetti
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initialTeamMembers.map(tm => (
            <div key={tm.id} className="group space-y-4">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 relative">
                <img src={tm.image} alt={tm.name} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-1.5 px-1">
                <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50">{tm.name}</h3>
                <div className="text-xs font-semibold text-red-600 font-mono">{tm.role}</div>
                <p className="text-xs text-stone-600 dark:text-stone-400 pt-2 leading-relaxed">{tm.bio}</p>
                <div className="pt-2">
                  <a href={tm.socialUrl || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:text-red-600 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TIMELINE STORICA */}
      <section id="storia" className="max-w-7xl mx-auto px-6 scroll-mt-32 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600 font-display">Evoluzione</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Il nostro percorso
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-stone-300 dark:before:bg-stone-800">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-display font-bold flex items-center justify-center shrink-0 z-10 shadow-lg group-hover:bg-red-600 transition-colors">
                {item.year}
              </div>
              <div className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex-1 space-y-2">
                <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50">{item.title}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. DIFFERENZA JH STUDIOS */}
      <section id="differenza" className="max-w-7xl mx-auto px-6 scroll-mt-32 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600 font-display">Vantaggi</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Perché JH studios?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-stone-900 text-stone-100 border border-stone-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-red-500 font-semibold">0{idx + 1} / Distinctive</span>
                <h3 className="text-2xl font-display font-bold">{diff.title}</h3>
                <p className="text-stone-400 text-sm sm:text-base leading-relaxed">{diff.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. NUMERI */}
      <section className="bg-stone-900 text-stone-100 py-24 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 space-y-2">
              <div className="text-4xl sm:text-6xl font-display font-bold text-red-500">50+</div>
              <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-medium">Progetti</div>
            </div>
            <div className="p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 space-y-2">
              <div className="text-4xl sm:text-6xl font-display font-bold text-stone-100">30+</div>
              <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-medium">Clienti</div>
            </div>
            <div className="p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 space-y-2">
              <div className="text-4xl sm:text-6xl font-display font-bold text-stone-100">10+</div>
              <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-medium">Servizi</div>
            </div>
            <div className="p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 space-y-2">
              <div className="text-4xl sm:text-6xl font-display font-bold text-red-500">100%</div>
              <div className="text-xs sm:text-sm text-stone-400 uppercase tracking-wider font-medium">Impegno</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA FINALE */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-50 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-stone-800">
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500 font-display font-mono">Inizia il tuo percorso</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              Costruiamo qualcosa di significativo.
            </h2>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Hai un progetto, un'idea o un brand che vuoi far crescere? Raccontacelo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentView('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Parliamo del tuo progetto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentView('services')}
                className="w-full sm:w-auto px-8 py-4 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-xl text-sm transition-colors border border-stone-700 flex items-center justify-center"
              >
                Scopri i nostri servizi
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
