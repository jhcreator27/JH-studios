import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Share2 } from 'lucide-react';

export const AdminSocial: React.FC = () => {
  const { socialSettings, updateSocialSettings } = useApp();
  const [formData, setFormData] = useState(socialSettings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSocialSettings(formData);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-stone-100">Gestione Social Media</h1>
        <p className="text-stone-400 text-sm mt-1">Configura i link dei profili social ufficiali dell'agenzia.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 rounded-3xl p-8 space-y-6">
        <div className="flex items-center gap-2 text-amber-500 mb-2">
          <Share2 className="w-5 h-5" />
          <h3 className="text-lg font-display font-bold text-stone-100">Profili Ufficiali</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">Instagram URL</label>
            <input
              type="url"
              value={formData.instagram}
              onChange={e => setFormData({ ...formData, instagram: e.target.value })}
              className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">Facebook URL</label>
            <input
              type="url"
              value={formData.facebook}
              onChange={e => setFormData({ ...formData, facebook: e.target.value })}
              className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">TikTok URL</label>
            <input
              type="url"
              value={formData.tiktok}
              onChange={e => setFormData({ ...formData, tiktok: e.target.value })}
              className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">LinkedIn URL</label>
            <input
              type="url"
              value={formData.linkedin}
              onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
              className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">YouTube URL</label>
            <input
              type="url"
              value={formData.youtube}
              onChange={e => setFormData({ ...formData, youtube: e.target.value })}
              className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">X / Twitter URL</label>
            <input
              type="url"
              value={formData.x}
              onChange={e => setFormData({ ...formData, x: e.target.value })}
              className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
          >
            <Check className="w-4 h-4" />
            <span>Salva Social</span>
          </button>
        </div>
      </form>
    </div>
  );
};
