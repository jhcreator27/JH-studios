import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Settings as SettingsIcon, Mail, Trash2 } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const { generalSettings, updateGeneralSettings, contactRequests, updateContactRequestStatus, deleteContactRequest } = useApp();
  const [formData, setFormData] = useState(generalSettings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateGeneralSettings(formData);
  };

  return (
    <div className="space-y-12">
      {/* General Settings */}
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Impostazioni Generali</h1>
          <p className="text-stone-400 text-sm mt-1">Modifica le informazioni di contatto e i dati istituzionali dell'agenzia.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-2 text-amber-500 mb-2">
            <SettingsIcon className="w-5 h-5" />
            <h3 className="text-lg font-display font-bold text-stone-100">Informazioni Agenzia</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-stone-400 font-semibold">Nome Agenzia</label>
              <input
                type="text"
                value={formData.agencyName}
                onChange={e => setFormData({ ...formData, agencyName: e.target.value })}
                required
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-stone-400 font-semibold">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-stone-400 font-semibold">Telefono</label>
              <input
                type="text"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-stone-400 font-semibold">Indirizzo Sede</label>
              <input
                type="text"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                required
                className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-stone-400 font-semibold">Tagline / Slogan</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={e => setFormData({ ...formData, tagline: e.target.value })}
              required
              className="w-full px-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
            >
              <Check className="w-4 h-4" />
              <span>Salva Impostazioni</span>
            </button>
          </div>
        </form>
      </div>

      {/* Contact Requests Management */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-stone-100">
          <Mail className="w-5 h-5 text-amber-500" />
          <h3 className="text-xl font-display font-bold">Richieste di Contatto Ricevute ({contactRequests.length})</h3>
        </div>

        <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-800/50 text-stone-400 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">Mittente</th>
                  <th className="px-6 py-4">Azienda / Servizio</th>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">Stato</th>
                  <th className="px-6 py-4 text-right">Azioni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800">
                {contactRequests.map(req => (
                  <tr key={req.id} className="hover:bg-stone-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-stone-100">{req.firstName} {req.lastName}</div>
                      <div className="text-xs text-stone-400">{req.email} · {req.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-stone-200">{req.company || 'Privato'}</div>
                      <div className="text-xs text-amber-500">{req.service}</div>
                    </td>
                    <td className="px-6 py-4 text-stone-400 text-xs">{req.date}</td>
                    <td className="px-6 py-4">
                      <select
                        value={req.status}
                        onChange={e => updateContactRequestStatus(req.id, e.target.value as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold focus:outline-none ${
                          req.status === 'Nuovo' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' : 'bg-stone-800 text-stone-300'
                        }`}
                      >
                        <option value="Nuovo">Nuovo</option>
                        <option value="In lavorazione">In lavorazione</option>
                        <option value="Contattato">Contattato</option>
                        <option value="Chiuso">Chiuso</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteContactRequest(req.id)}
                        className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10 transition-colors"
                        title="Elimina richiesta"
                      >
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
    </div>
  );
};
