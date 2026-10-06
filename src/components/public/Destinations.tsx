import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, MapPin, ArrowRight, Compass } from 'lucide-react';

export const Destinations: React.FC = () => {
  const { destinations, setCurrentView } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');

  const categories = ['Tutti', ...Array.from(new Set(destinations.map(d => d.category)))];

  const filteredDestinations = selectedCategory === 'Tutti'
    ? destinations
    : destinations.filter(d => d.category === selectedCategory);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Destinazioni & Hub Strategici</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-4xl leading-[1.08]">
            I nostri mercati e <span className="text-amber-600">avamposti internazionali.</span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            Operiamo in Europa attraverso hub strategici dedicati al design, al lusso, alla tecnologia e alla comunicazione istituzionale.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/60 dark:bg-stone-900 rounded-xl w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDestinations.map(dest => (
            <div
              key={dest.id}
              className="group p-8 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800 relative">
                  <img src={dest.image} alt={dest.name} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-stone-100 px-3 py-1 rounded-full text-xs font-medium">
                    {dest.category}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-amber-600 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.location}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">{dest.name}</h3>
                  <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">{dest.description}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-500">{dest.relatedProjects.length} Progetti correlati</span>
                <button
                  onClick={() => setCurrentView('portfolio')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition-colors"
                >
                  <span>Esplora progetti</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
