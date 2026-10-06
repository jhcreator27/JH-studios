import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Sparkles, TrendingUp, Award, Users, CheckCircle } from 'lucide-react';
import { initialTestimonials } from '../../data/initialData';
import { Testimonial } from '../../types';

export const Home: React.FC = () => {
  const { setCurrentView, services, projects, blogPosts } = useApp();
  const testimonials = initialTestimonials;

  const heroImage = '/src/assets/images/hero_marketing_studio_1791274361323.jpg';

  return (
    <div className="space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Agenzia Creativa & Digital Strategy</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.08]">
                Trasformiamo idee in strategie che <span className="text-amber-600 dark:text-amber-500">lasciano il segno.</span>
              </h1>
              <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
                Aiutiamo brand ambiziosi a scalare il mercato attraverso marketing digitale d’eccellenza, branding memorabile, content creation e design d’avanguardia.
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

              {/* Quick stats unboxed */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-stone-200 dark:border-stone-800">
                <div>
                  <div className="text-3xl font-display font-bold text-stone-900 dark:text-stone-50">150+</div>
                  <div className="text-xs text-stone-500 mt-1">Progetti di successo</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-stone-900 dark:text-stone-50">98%</div>
                  <div className="text-xs text-stone-500 mt-1">Clienti soddisfatti</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-stone-900 dark:text-stone-50">12+</div>
                  <div className="text-xs text-stone-500 mt-1">Anni di eccellenza</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
                <img
                  src={heroImage}
                  alt="JH studios creative office"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white space-y-1">
                    <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">Milano / Parigi / Zurigo</div>
                    <div className="text-lg font-display font-bold">Laboratorio di Comunicazione Globale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Agency Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-display">Chi siamo</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Un approccio sartoriale e rigoroso per far emergere il tuo valore unico.
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed">
            Non crediamo nelle soluzioni standardizzate. Ogni brand possiede una storia irripetibile che merita di essere raccontata attraverso strategie digitali mirate, design impeccabile ed esecuzione impeccabile.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-display">Competenze</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 dark:text-stone-50">
              I nostri servizi chiave
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-600 transition-colors"
          >
            <span>Tutti i servizi (10)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setCurrentView('services')}
              className="group cursor-pointer p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 hover:border-amber-500/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-xs font-mono text-stone-400">0{idx + 1}.</div>
                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition-colors">
                <span>Esplora servizio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-display">Lavori Recenti</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 dark:text-stone-50">
              Portfolio & Progetti
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('portfolio')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-600 transition-colors"
          >
            <span>Vedi tutti i progetti</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => setCurrentView('portfolio')}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-stone-100 px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-stone-500">{project.client} · {project.year}</div>
                <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose JH studios */}
      <section className="bg-stone-900 text-stone-100 py-24 my-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-display">Perché sceglierci</span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
                Eccellenza creativa e rigore analitico.
              </h2>
              <p className="text-stone-400 leading-relaxed">
                Uniamo l’ispirazione del design contemporaneo alla precisione dei dati. Ogni progetto viene seguito da specialisti senior dedicati.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setCurrentView('contact')}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-sm"
                >
                  Inizia una collaborazione
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/50 space-y-3">
                <TrendingUp className="w-8 h-8 text-amber-500 mb-2" />
                <h3 className="text-lg font-display font-bold">Risultati Misurabili</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Definiamo KPI chiari e monitoriamo costantemente il ritorno sull’investimento per ogni azione strategica.
                </p>
              </div>
              <div className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/50 space-y-3">
                <Award className="w-8 h-8 text-amber-500 mb-2" />
                <h3 className="text-lg font-display font-bold">Design Pluripremiato</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Estetica minimale, tipografia curata e identità visive uniche per far risaltare il tuo marchio.
                </p>
              </div>
              <div className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/50 space-y-3">
                <Users className="w-8 h-8 text-amber-500 mb-2" />
                <h3 className="text-lg font-display font-bold">Team Dedicato</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Un team di esperti senior al tuo fianco in ogni fase, dalla strategia iniziale alla messa online.
                </p>
              </div>
              <div className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/50 space-y-3">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-2" />
                <h3 className="text-lg font-display font-bold">Metodo Sartoriale</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Soluzioni su misura progettate specificamente attorno agli obiettivi e al DNA della tua azienda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-display">Testimonianze</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 dark:text-stone-50">
            Cosa dicono i nostri clienti
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="p-8 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between space-y-6">
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-300 dark:bg-stone-800 shrink-0">
                  <img src={t.avatar} alt={t.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-900 dark:text-stone-50 text-sm">{t.name}</h4>
                  <div className="text-xs text-stone-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-500 font-display">Insights & Idee</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 dark:text-stone-50">
              Ultimi dal Blog
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('blog')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-600 transition-colors"
          >
            <span>Tutti gli articoli</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map(post => (
            <div
              key={post.id}
              onClick={() => setCurrentView('blog')}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <img src={post.coverImage} alt={post.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                  <span>{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">{post.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-50 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-stone-800">
          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-display">Iniziamo</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">
              Pronto a far crescere il tuo brand?
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Raccontaci la tua visione o il tuo progetto. Ti aiuteremo a trasformarlo in una strategia digitale di successo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentView('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-sm"
              >
                Parliamo del tuo progetto
              </button>
              <button
                onClick={() => setCurrentView('services')}
                className="w-full sm:w-auto px-8 py-4 bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold rounded-xl text-sm transition-colors border border-stone-700"
              >
                Esplora i servizi
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
