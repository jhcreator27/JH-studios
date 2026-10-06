import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BlogPost } from '../../types';
import { Plus, Edit3, Trash2, X, Check } from 'lucide-react';

export const AdminBlog: React.FC = () => {
  const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost } = useApp();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'Branding',
    author: 'Jacopo Hill',
    content: '',
    status: 'Pubblicato' as BlogPost['status'],
    tags: 'Branding, Design'
  });

  const handleOpenCreate = () => {
    setIsCreating(true);
    setEditingPost(null);
    setFormData({
      title: '',
      subtitle: '',
      category: 'Branding',
      author: 'Jacopo Hill',
      content: '',
      status: 'Pubblicato',
      tags: 'Branding, Design'
    });
  };

  const handleOpenEdit = (b: BlogPost) => {
    setEditingPost(b);
    setIsCreating(false);
    setFormData({
      title: b.title,
      subtitle: b.subtitle,
      category: b.category,
      author: b.author,
      content: b.content,
      status: b.status,
      tags: b.tags.join(', ')
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      subtitle: formData.subtitle,
      slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
      content: formData.content,
      author: formData.author,
      date: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' }),
      category: formData.category,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      coverImage: '/src/assets/images/blog_cover_1791274392023.jpg',
      status: formData.status
    };

    if (isCreating) {
      addBlogPost(payload);
    } else if (editingPost) {
      updateBlogPost(editingPost.id, payload);
    }

    setIsCreating(false);
    setEditingPost(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Gestione Blog</h1>
          <p className="text-stone-400 text-sm mt-1">Crea, modifica e gestisci gli articoli pubblicati sul blog dell'agenzia.</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Nuovo Articolo</span>
        </button>
      </div>

      {(isCreating || editingPost) && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-2xl rounded-3xl p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="text-xl font-display font-bold text-stone-100">
                {isCreating ? 'Nuovo Articolo Blog' : 'Modifica Articolo'}
              </h3>
              <button onClick={() => { setIsCreating(false); setEditingPost(null); }} className="p-2 text-stone-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Titolo Articolo</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Sottotitolo / Sommario</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  <label className="text-xs text-stone-400 font-semibold">Autore</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={e => setFormData({ ...formData, author: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-stone-400 font-semibold">Stato</label>
                  <select
                    value={formData.status}
                    onChange={e => setFormData({ ...formData, status: e.target.value as BlogPost['status'] })}
                    className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Pubblicato">Pubblicato</option>
                    <option value="Bozza">Bozza</option>
                    <option value="Programmato">Programmato</option>
                    <option value="Archiviato">Archiviato</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Contenuto</label>
                <textarea
                  rows={5}
                  value={formData.content}
                  onChange={e => setFormData({ ...formData, content: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-stone-400 font-semibold">Tag (separati da virgola)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={e => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => { setIsCreating(false); setEditingPost(null); }}
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
                <th className="px-6 py-4">Titolo</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Autore</th>
                <th className="px-6 py-4">Stato</th>
                <th className="px-6 py-4 text-right">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {blogPosts.map(b => (
                <tr key={b.id} className="hover:bg-stone-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-stone-100">{b.title}</td>
                  <td className="px-6 py-4 text-amber-500">{b.category}</td>
                  <td className="px-6 py-4 text-stone-400">{b.author}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      b.status === 'Pubblicato' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button onClick={() => handleOpenEdit(b)} className="p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteBlogPost(b.id)} className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10">
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
