import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Service } from '../../types';
import { Plus, Edit3, Trash2, X, Check } from 'lucide-react';

export const AdminServices: React.FC = () => {
  const { services, addService, updateService, deleteService } = useApp();
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Strategia' as 'Strategia' | 'Comunicazione' | 'Design' | 'Visual',
    number: '11',
    shortDescription: '',
    fullDescription: '',
    image: '',
    benefits: 'Aumento del ROI, Visione chiara',
    features: 'Analisi, Strategia, Report',
    pricePlaceholder: 'A partire da € 1.500'
  });

  const handleOpenCreate = () => {
    setIsCreating(true);
    setEditingService(null);
    setFormData({
      title: '',
      slug: '',
      category: 'Strategia',
      number: '11',
      shortDescription: '',
      fullDescription: '',
      image: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
      benefits: 'Aumento del ROI, Visione chiara',
      features: 'Analisi, Strategia, Report',
      pricePlaceholder: 'A partire da € 1.500'
    });
  };

  const handleOpenEdit = (s: Service) => {
    setEditingService(s);
    setIsCreating(false);
    setFormData({
      title: s.title,
      slug: s.slug,
      category: s.category || 'Strategia',
      number: s.number || '11',
      shortDescription: s.shortDescription,
      fullDescription: s.fullDescription,
      image: s.image,
      benefits: s.benefits.join(', '),
      features: s.features.join(', '),
      pricePlaceholder: s.pricePlaceholder || ''
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
      category: formData.category,
      number: formData.number,
      shortDescription: formData.shortDescription,
      fullDescription: formData.fullDescription,
      image: formData.image || '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
      benefits: formData.benefits.split(',').map(b => b.trim()).filter(Boolean),
      features: formData.features.split(',').map(f => f.trim()).filter(Boolean),
      pricePlaceholder: formData.pricePlaceholder
    };

    if (isCreating) {
      addService(payload);
    } else if (editingService) {
      updateService(editingService.id, payload);
    }

    setIsCreating(false);
    setEditingService(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Gestione Servizi</h1>
          <p className="text-stone-400 text-sm mt-1">Aggiungi, modifica o elimina i servizi offerti dall'agenzia.</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Nuovo Servizio</span>
        </button>
      </div>

      {/* Form Modal */}
      {(isCreating || editingService) && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-2xl rounded-3xl p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="text-xl font-display font-bold text-stone-100">
                {isCreating ? 'Crea Nuovo Servizio' : 'Modifica Servizio'}
              </h3>
              <button onClick={() => { setIsCreating(false); setEditingService(null); }} className="p-2 text-stone-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Titolo Servizio</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Descrizione Breve</label>
                <textarea
                  rows={2}
                  value={formData.shortDescription}
                  onChange={e => setFormData({ ...formData, shortDescription: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Descrizione Completa</label>
                <textarea
                  rows={4}
                  value={formData.fullDescription}
                  onChange={e => setFormData({ ...formData, fullDescription: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Vantaggi (separati da virgola)</label>
                  <input
                    type="text"
                    value={formData.benefits}
                    onChange={e => setFormData({ ...formData, benefits: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Caratteristiche (separate da virgola)</label>
                  <input
                    type="text"
                    value={formData.features}
                    onChange={e => setFormData({ ...formData, features: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Prezzo / Investimento Placeholder</label>
                <input
                  type="text"
                  value={formData.pricePlaceholder}
                  onChange={e => setFormData({ ...formData, pricePlaceholder: e.target.value })}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => { setIsCreating(false); setEditingService(null); }}
                  className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-sm font-semibold"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl text-sm font-semibold flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Salva</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Services List Table */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-800/50 text-stone-400 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Titolo</th>
                <th className="px-6 py-4">Descrizione Breve</th>
                <th className="px-6 py-4">Prezzo</th>
                <th className="px-6 py-4 text-right">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {services.map(s => (
                <tr key={s.id} className="hover:bg-stone-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-stone-100">{s.title}</td>
                  <td className="px-6 py-4 text-stone-400 max-w-xs truncate">{s.shortDescription}</td>
                  <td className="px-6 py-4 text-amber-500 font-medium">{s.pricePlaceholder || 'Su misura'}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => handleOpenEdit(s)} className="p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteService(s.id)} className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
