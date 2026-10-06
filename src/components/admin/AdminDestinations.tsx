import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Destination } from '../../types';
import { Plus, Edit3, Trash2, X, Check } from 'lucide-react';

export const AdminDestinations: React.FC = () => {
  const { destinations, addDestination, updateDestination, deleteDestination } = useApp();
  const [editingDest, setEditingDest] = useState<Destination | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    description: ''
  });

  const handleOpenCreate = () => {
    setIsCreating(true);
    setEditingDest(null);
    setFormData({ name: '', category: '', location: '', description: '' });
  };

  const handleOpenEdit = (d: Destination) => {
    setEditingDest(d);
    setIsCreating(false);
    setFormData({
      name: d.name,
      category: d.category,
      location: d.location,
      description: d.description
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      slug: formData.name.toLowerCase().replace(/\s+/g, '-'),
      category: formData.category,
      location: formData.location,
      description: formData.description,
      image: '/src/assets/images/destination_image_1791274400203.jpg',
      relatedProjects: []
    };

    if (isCreating) {
      addDestination(payload);
    } else if (editingDest) {
      updateDestination(editingDest.id, payload);
    }

    setIsCreating(false);
    setEditingDest(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Gestione Destinazioni & Hub</h1>
          <p className="text-stone-400 text-sm mt-1">Aggiungi, modifica o elimina le destinazioni e gli avamposti internazionali.</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Nuova Destinazione</span>
        </button>
      </div>

      {(isCreating || editingDest) && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-lg rounded-3xl p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="text-xl font-display font-bold text-stone-100">
                {isCreating ? 'Nuova Destinazione' : 'Modifica Destinazione'}
              </h3>
              <button onClick={() => { setIsCreating(false); setEditingDest(null); }} className="p-2 text-stone-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Nome Destinazione</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Categoria</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Località</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Descrizione</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => { setIsCreating(false); setEditingDest(null); }}
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

      <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-800/50 text-stone-400 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Località</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4 text-right">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {destinations.map(d => (
                <tr key={d.id} className="hover:bg-stone-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-stone-100">{d.name}</td>
                  <td className="px-6 py-4 text-stone-400">{d.location}</td>
                  <td className="px-6 py-4 text-amber-500">{d.category}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => handleOpenEdit(d)} className="p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteDestination(d.id)} className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10">
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
