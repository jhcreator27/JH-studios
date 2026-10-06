import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, X, ArrowRight, BookOpen, Briefcase, Compass, Layers } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { services, projects, destinations, blogPosts, setCurrentView } = useApp();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedServices = q ? services.filter(s => s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)) : [];
  const matchedProjects = q ? projects.filter(p => p.title.toLowerCase().includes(p.title.toLowerCase()) || p.client.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) : [];
  const matchedBlog = q ? blogPosts.filter(b => b.title.toLowerCase().includes(q) || b.content.toLowerCase().includes(q)) : [];
  const matchedDestinations = q ? destinations.filter(d => d.name.toLowerCase().includes(q) || d.location.toLowerCase().includes(q)) : [];

  const hasResults = matchedServices.length > 0 || matchedProjects.length > 0 || matchedBlog.length > 0 || matchedDestinations.length > 0;

  const handleSelectResult = (view: string) => {
    setCurrentView(view);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="bg-stone-900 border border-stone-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden text-stone-100">
        {/* Search input header */}
        <div className="flex items-center px-6 py-4 border-b border-stone-800 gap-3">
          <Search className="w-5 h-5 text-amber-500" />
          <input
            type="text"
            placeholder="Cerca servizi, progetti, articoli, destinazioni..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-stone-100 placeholder-stone-500 text-base focus:outline-none"
          />
          <button onClick={onClose} className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results body */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          {!q && (
            <div className="text-center py-12 text-stone-500 text-sm">
              Digita almeno un termine per iniziare la ricerca globale nel sito.
            </div>
          )}

          {q && !hasResults && (
            <div className="text-center py-12 text-stone-400 text-sm">
              Nessun risultato trovato per "<span className="text-stone-200 font-semibold">{query}</span>".
            </div>
          )}

          {matchedServices.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-display flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" /> Servizi ({matchedServices.length})
              </h4>
              <div className="space-y-2">
                {matchedServices.map(s => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectResult('services')}
                    className="w-full text-left p-3 rounded-xl bg-stone-800/50 hover:bg-stone-800 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-200 text-sm group-hover:text-white">{s.title}</div>
                      <div className="text-xs text-stone-400 line-clamp-1">{s.shortDescription}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-500 shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedProjects.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-display flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" /> Portfolio ({matchedProjects.length})
              </h4>
              <div className="space-y-2">
                {matchedProjects.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectResult('portfolio')}
                    className="w-full text-left p-3 rounded-xl bg-stone-800/50 hover:bg-stone-800 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-200 text-sm group-hover:text-white">{p.title}</div>
                      <div className="text-xs text-stone-400">{p.client} · {p.category}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-500 shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedBlog.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-display flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> Articoli Blog ({matchedBlog.length})
              </h4>
              <div className="space-y-2">
                {matchedBlog.map(b => (
                  <button
                    key={b.id}
                    onClick={() => handleSelectResult('blog')}
                    className="w-full text-left p-3 rounded-xl bg-stone-800/50 hover:bg-stone-800 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-200 text-sm group-hover:text-white">{b.title}</div>
                      <div className="text-xs text-stone-400">{b.date} · {b.category}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-500 shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {matchedDestinations.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-display flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" /> Destinazioni ({matchedDestinations.length})
              </h4>
              <div className="space-y-2">
                {matchedDestinations.map(d => (
                  <button
                    key={d.id}
                    onClick={() => handleSelectResult('destinations')}
                    className="w-full text-left p-3 rounded-xl bg-stone-800/50 hover:bg-stone-800 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-200 text-sm group-hover:text-white">{d.name}</div>
                      <div className="text-xs text-stone-400">{d.location} · {d.category}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-500 shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
