import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowRight, X, ExternalLink, Calendar, Briefcase, Award } from 'lucide-react';
import { Project } from '../../types';

export const Portfolio: React.FC = () => {
  const { projects, setCurrentView } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['Tutti', 'Branding', 'Social Media', 'Graphic Design', 'Marketing', 'Web Design', 'Photography'];

  const filteredProjects = selectedCategory === 'Tutti'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Portfolio & Casi Studio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-4xl leading-[1.08]">
            Lavori che parlano da soli. <span className="text-amber-600">Risultati concreti.</span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            Esplora la nostra selezione di progetti di successo realizzati per brand internazionali, startup innovative e aziende leader di settore.
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

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 relative">
                <img src={project.image} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-stone-100 px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span>{project.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-stone-900 text-stone-100 border border-stone-800 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-8 py-6 border-b border-stone-800">
              <div>
                <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">{activeProject.category}</span>
                <h3 className="text-2xl font-display font-bold text-stone-100 mt-1">{activeProject.title}</h3>
              </div>
              <button onClick={() => setActiveProject(null)} className="p-2 text-stone-400 hover:text-white rounded-full bg-stone-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto space-y-8">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-stone-800 border border-stone-700">
                <img src={activeProject.image} alt={activeProject.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-stone-800/50 border border-stone-800">
                  <div className="text-xs text-stone-400 mb-1 flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-amber-500" /> Cliente</div>
                  <div className="font-semibold text-stone-200 text-sm">{activeProject.client}</div>
                </div>
                <div className="p-4 rounded-xl bg-stone-800/50 border border-stone-800">
                  <div className="text-xs text-stone-400 mb-1 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-amber-500" /> Anno</div>
                  <div className="font-semibold text-stone-200 text-sm">{activeProject.year}</div>
                </div>
                <div className="p-4 rounded-xl bg-stone-800/50 border border-stone-800">
                  <div className="text-xs text-stone-400 mb-1 flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-amber-500" /> Categoria</div>
                  <div className="font-semibold text-stone-200 text-sm">{activeProject.category}</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold text-stone-100">Descrizione del Progetto</h4>
                <p className="text-stone-300 text-base leading-relaxed">{activeProject.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold text-stone-100">Risultato Raggiunto</h4>
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold text-base">
                  {activeProject.result}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-display">Servizi Utilizzati</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.servicesUsed.map((s, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-stone-800 border border-stone-700 rounded-lg text-xs font-medium text-stone-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-stone-800 flex justify-end">
                <button
                  onClick={() => { setActiveProject(null); setCurrentView('contact'); }}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Richiedi un progetto simile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
