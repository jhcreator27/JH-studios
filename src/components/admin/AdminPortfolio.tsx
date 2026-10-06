import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Project } from '../../types';
import { Plus, Edit3, Trash2, X, Check } from 'lucide-react';

export const AdminPortfolio: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useApp();
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    client: '',
    category: 'Branding' as Project['category'],
    description: '',
    year: '2026',
    result: '',
    servicesUsed: 'Branding, Graphic Design',
    link: 'https://example.com'
  });

  const handleOpenCreate = () => {
    setIsCreating(true);
    setEditingProject(null);
    setFormData({
      title: '',
      client: '',
      category: 'Branding',
      description: '',
      year: '2026',
      result: '',
      servicesUsed: 'Branding, Graphic Design',
      link: 'https://example.com'
    });
  };

  const handleOpenEdit = (p: Project) => {
    setEditingProject(p);
    setIsCreating(false);
    setFormData({
      title: p.title,
      client: p.client,
      category: p.category,
      description: p.description,
      year: p.year,
      result: p.result,
      servicesUsed: p.servicesUsed.join(', '),
      link: p.link || ''
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
      client: formData.client,
      category: formData.category,
      image: '/src/assets/images/portfolio_branding_1791274372060.jpg',
      gallery: ['/src/assets/images/portfolio_branding_1791274372060.jpg'],
      description: formData.description,
      servicesUsed: formData.servicesUsed.split(',').map(s => s.trim()).filter(Boolean),
      year: formData.year,
      result: formData.result,
      link: formData.link
    };

    if (isCreating) {
      addProject(payload);
    } else if (editingProject) {
      updateProject(editingProject.id, payload);
    }

    setIsCreating(false);
    setEditingProject(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Gestione Portfolio</h1>
          <p className="text-stone-400 text-sm mt-1">Aggiungi, modifica o elimina i progetti presentati nell'agenzia.</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Nuovo Progetto</span>
        </button>
      </div>

      {(isCreating || editingProject) && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-2xl rounded-3xl p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="text-xl font-display font-bold text-stone-100">
                {isCreating ? 'Crea Nuovo Progetto' : 'Modifica Progetto'}
              </h3>
              <button onClick={() => { setIsCreating(false); setEditingProject(null); }} className="p-2 text-stone-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Titolo Progetto</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Cliente</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={e => setFormData({ ...formData, client: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Categoria</label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value as Project['category'] })}
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Branding">Branding</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Photography">Photography</option>
                  </select>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Anno</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={e => setFormData({ ...formData, year: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Servizi Utilizzati (separati da virgola)</label>
                  <input
                    type="text"
                    value={formData.servicesUsed}
                    onChange={e => setFormData({ ...formData, servicesUsed: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Risultato Raggiunto</label>
                <input
                  type="text"
                  value={formData.result}
                  onChange={e => setFormData({ ...formData, result: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => { setIsCreating(false); setEditingProject(null); }}
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

      {/* Projects Table */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-800/50 text-stone-400 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Progetto</th>
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Anno</th>
                <th className="px-6 py-4 text-right">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {projects.map(p => (
                <tr key={p.id} className="hover:bg-stone-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-stone-100">{p.title}</td>
                  <td className="px-6 py-4 text-stone-400">{p.client}</td>
                  <td className="px-6 py-4 text-amber-500">{p.category}</td>
                  <td className="px-6 py-4 text-stone-400">{p.year}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => handleOpenEdit(p)} className="p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteProject(p.id)} className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10">
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
