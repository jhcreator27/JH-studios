import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export const Services: React.FC = () => {
  const { services, setCurrentView } = useApp();

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>I Nostri Servizi</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-4xl leading-[1.08]">
            Soluzioni strategiche e creative per <span className="text-amber-600">ogni fase del tuo business.</span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            Dalla pianificazione strategica al web design, dalla gestione social alla fotografia di prodotto: offriamo un ecosistema completo di servizi digitali.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 space-y-20">
        {services.map((service, idx) => (
          <div
            key={service.id}
            id={service.slug}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-stone-200 dark:border-stone-800 last:border-0 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold text-amber-600 bg-amber-500/10 px-3 py-1 rounded-md">
                  0{idx + 1}
                </span>
                <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">{service.title}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 dark:text-stone-50">
                {service.title}
              </h2>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-base sm:text-lg">
                {service.fullDescription}
              </p>

              {/* Benefits */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-display">Vantaggi principali</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-display">Caratteristiche</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIdx) => (
                    <span key={fIdx} className="px-3 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg text-xs font-medium text-stone-700 dark:text-stone-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-stone-200 dark:border-stone-800">
                <div>
                  <div className="text-xs text-stone-500">Investimento stimato</div>
                  <div className="text-lg font-display font-bold text-stone-900 dark:text-stone-50">{service.pricePlaceholder || 'Su misura'}</div>
                </div>
                <button
                  onClick={() => setCurrentView('contact')}
                  className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-stone-50 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Richiedi servizio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
                <img src={service.image} alt={service.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-stone-900 text-stone-50 rounded-3xl p-12 md:p-16 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Hai bisogno di una soluzione personalizzata?</h2>
          <p className="text-stone-400 max-w-xl mx-auto text-sm sm:text-base">
            Combinaremo i nostri servizi per creare un piano strategico su misura per la tua azienda.
          </p>
          <button
            onClick={() => setCurrentView('contact')}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>Parla con un consulente</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
