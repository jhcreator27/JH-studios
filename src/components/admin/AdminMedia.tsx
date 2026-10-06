import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Upload, Trash2, Image as ImageIcon } from 'lucide-react';

export const AdminMedia: React.FC = () => {
  const { mediaItems, addMediaItem, deleteMediaItem } = useApp();
  const [uploadName, setUploadName] = useState('');

  const handleUploadSim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadName) return;
    addMediaItem({
      name: uploadName,
      url: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
      type: 'image',
      size: '1.2 MB',
      altText: uploadName
    });
    setUploadName('');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-stone-100">Media Library</h1>
        <p className="text-stone-400 text-sm mt-1">Carica e gestisci immagini, video e risorse multimediali dell'agenzia.</p>
      </div>

      {/* Upload simulator box */}
      <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
        <h3 className="text-lg font-display font-bold text-stone-100">Carica Nuovo File</h3>
        <form onSubmit={handleUploadSim} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Nome file o descrizione risorsa"
            value={uploadName}
            onChange={e => setUploadName(e.target.value)}
            required
            className="flex-1 px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Upload className="w-4 h-4" />
            <span>Carica File</span>
          </button>
        </form>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map(item => (
          <div key={item.id} className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-4 flex flex-col justify-between">
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-stone-950 border border-stone-800">
              <img src={item.url} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-stone-100 text-sm truncate">{item.name}</div>
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>{item.size}</span>
                <span>{item.date}</span>
              </div>
            </div>
            <div className="pt-2 border-t border-stone-800 flex justify-end">
              <button
                onClick={() => deleteMediaItem(item.id)}
                className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10 transition-colors"
                title="Elimina file"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
