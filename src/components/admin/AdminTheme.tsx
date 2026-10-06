import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Palette, RotateCcw } from 'lucide-react';

export const AdminTheme: React.FC = () => {
  const { themeSettings, updateThemeSettings, resetToDefaults } = useApp();
  const [formData, setFormData] = useState(themeSettings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateThemeSettings(formData);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Personalizzazione Tema & Aspetto</h1>
          <p className="text-stone-400 text-sm mt-1">Configura i colori, la tipografia e l'aspetto visivo dell'applicazione.</p>
        </div>
        <button
          onClick={resetToDefaults}
          className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Ripristina Predefiniti</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 rounded-3xl p-8 space-y-6">
        <div className="flex items-center gap-2 text-amber-500 mb-2">
          <Palette className="w-5 h-5" />
          <h3 className="text-lg font-display font-bold text-stone-100">Palette Colori & Tipografia</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">Colore Primario</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={formData.primaryColor}
                onChange={e => setFormData({ ...formData, primaryColor: e.target.value })}
                className="w-12 h-10 bg-transparent rounded cursor-pointer"
              />
              <input
                type="text"
                value={formData.primaryColor}
                onChange={e => setFormData({ ...formData, primaryColor: e.target.value })}
                className="flex-1 px-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">Colore Accent</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={formData.accentColor}
                onChange={e => setFormData({ ...formData, accentColor: e.target.value })}
                className="w-12 h-10 bg-transparent rounded cursor-pointer"
              />
              <input
                type="text"
                value={formData.accentColor}
                onChange={e => setFormData({ ...formData, accentColor: e.target.value })}
                className="flex-1 px-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">Tema Scuro / Chiaro</label>
            <select
              value={formData.darkMode ? 'dark' : 'light'}
              onChange={e => setFormData({ ...formData, darkMode: e.target.value === 'dark' })}
              className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
            >
              <option value="light">Tema Chiaro</option>
              <option value="dark">Tema Scuro</option>
            </select>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            <Check className="w-4 h-4" />
            <span>Salva Tema</span>
          </button>
        </div>
      </form>
    </div>
  );
};
