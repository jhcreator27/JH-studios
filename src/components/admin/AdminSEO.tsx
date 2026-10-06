import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Search } from 'lucide-react';

export const AdminSEO: React.FC = () => {
  const { seoSettings, updateSEOSettings } = useApp();
  const [formData, setFormData] = useState(seoSettings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSEOSettings(formData);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-stone-100">Configurazione SEO & Schema.org</h1>
        <p className="text-stone-400 text-sm mt-1">Ottimizza i meta tag, i titoli di ricerca e i dati strutturati per i motori di ricerca.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 rounded-3xl p-8 space-y-6">
        <div className="flex items-center gap-2 text-amber-500 mb-2">
          <Search className="w-5 h-5" />
          <h3 className="text-lg font-display font-bold text-stone-100">Meta Tag Principali</h3>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-stone-400 font-semibold">Titolo del Sito (SEO Title)</label>
          <input
            type="text"
            value={formData.siteTitle}
            onChange={e => setFormData({ ...formData, siteTitle: e.target.value })}
            required
            className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
          />
          <p className="text-[11px] text-stone-500">Lunghezza consigliata: tra 30 e 60 caratteri.</p>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-stone-400 font-semibold">Meta Description</label>
          <textarea
            rows={3}
            value={formData.siteDescription}
            onChange={e => setFormData({ ...formData, siteDescription: e.target.value })}
            required
            className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500 resize-none"
          />
          <p className="text-[11px] text-stone-500">Lunghezza consigliata: tra 120 e 160 caratteri.</p>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-stone-400 font-semibold">Keywords</label>
          <input
            type="text"
            value={formData.keywords}
            onChange={e => setFormData({ ...formData, keywords: e.target.value })}
            className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            <Check className="w-4 h-4" />
            <span>Salva Impostazioni SEO</span>
          </button>
        </div>
      </form>
    </div>
  );
};
