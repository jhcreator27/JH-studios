import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Testimonial } from '../../types';
import { Plus, Edit3, Trash2, X, Check, Eye, EyeOff } from 'lucide-react';

export const AdminTestimonials: React.FC = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useApp();
  const [editingT, setEditingT] = useState<Testimonial | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    avatar: '/src/assets/images/portfolio_branding_1791274372060.jpg'
  });

  const handleOpenCreate = () => {
    setIsCreating(true);
    setEditingT(null);
    setFormData({
      name: '',
      role: '',
      company: '',
      content: '',
      avatar: '/src/assets/images/portfolio_branding_1791274372060.jpg'
    });
  };

  const handleOpenEdit = (t: Testimonial) => {
    setEditingT(t);
    setIsCreating(false);
    setFormData({
      name: t.name,
      role: t.role,
      company: t.company,
      content: t.content,
      avatar: t.avatar
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      role: formData.role,
      company: formData.company,
      content: formData.content,
      avatar: formData.avatar,
      visible: true
    };

    if (isCreating) {
      addTestimonial(payload);
    } else if (editingT) {
      updateTestimonial(editingT.id, payload);
    }

    setIsCreating(false);
    setEditingT(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Gestione Testimonianze</h1>
          <p className="text-stone-400 text-sm mt-1">Aggiungi, modifica, elimina o nascondi le testimonianze dei clienti.</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Nuova Testimonianza</span>
        </button>
      </div>

      {(isCreating || editingT) && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-lg rounded-3xl p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="text-xl font-display font-bold text-stone-100">
                {isCreating ? 'Nuova Testimonianza' : 'Modifica Testimonianza'}
              </h3>
              <button onClick={() => { setIsCreating(false); setEditingT(null); }} className="p-2 text-stone-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Nome Cliente</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Ruolo</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Azienda</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Citazione / Testo</label>
                <textarea
                  rows={4}
                  value={formData.content}
                  onChange={e => setFormData({ ...formData, content: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-red-500 resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => { setIsCreating(false); setEditingT(null); }}
                  className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-sm font-semibold"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-stone-950 rounded-xl text-sm font-semibold flex items-center gap-2"
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
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Azienda / Ruolo</th>
                <th className="px-6 py-4">Citazione</th>
                <th className="px-6 py-4 text-right">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {testimonials.map(t => (
                <tr key={t.id} className="hover:bg-stone-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-stone-100">{t.name}</td>
                  <td className="px-6 py-4 text-stone-400">{t.company} ({t.role})</td>
                  <td className="px-6 py-4 text-stone-300 max-w-xs truncate">"{t.content}"</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => updateTestimonial(t.id, { visible: t.visible === false ? true : false })}
                      className="p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800"
                      title={t.visible !== false ? 'Nascondi' : 'Mostra'}
                    >
                      {t.visible !== false ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-stone-500" />}
                    </button>
                    <button onClick={() => handleOpenEdit(t)} className="p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteTestimonial(t.id)} className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10">
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
