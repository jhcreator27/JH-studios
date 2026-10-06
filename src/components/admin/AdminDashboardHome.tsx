import React from 'react';
import { useApp } from '../../context/AppContext';
import { Users, FileText, Briefcase, Mail, TrendingUp, ArrowUpRight, Sparkles } from 'lucide-react';

export const AdminDashboardHome: React.FC = () => {
  const { services, projects, blogPosts, contactRequests, destinations } = useApp();

  const publishedArticles = blogPosts.filter(b => b.status === 'Pubblicato').length;
  const newContacts = contactRequests.filter(c => c.status === 'Nuovo').length;

  return (
    <div className="space-y-8">
      {/* Top greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-stone-100">Dashboard Amministrativa</h1>
          <p className="text-stone-400 text-sm mt-1">Panoramica generale dei contenuti, delle attività e delle richieste recenti.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-stone-900 border border-stone-800 rounded-xl text-xs text-stone-300">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Sistema attivo e sincronizzato</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Visite Totali (Mese)</span>
            <Users className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-display font-bold text-stone-100">24.580</div>
          <div className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" /> +18.4% rispetto al mese scorso
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Richieste Contatto</span>
            <Mail className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-display font-bold text-stone-100">{contactRequests.length}</div>
          <div className="text-xs text-amber-400 font-medium">
            {newContacts} nuove richieste da gestire
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Progetti Portfolio</span>
            <Briefcase className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-display font-bold text-stone-100">{projects.length}</div>
          <div className="text-xs text-stone-400 font-medium">Pubblicati in 6 categorie</div>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Articoli Blog</span>
            <FileText className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-display font-bold text-stone-100">{publishedArticles}</div>
          <div className="text-xs text-stone-400 font-medium">Su {blogPosts.length} totali</div>
        </div>
      </div>

      {/* Traffic Chart Placeholder & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Chart placeholder */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-display font-bold text-stone-100">Traffico e Visite Web</h3>
              <p className="text-xs text-stone-400">Andamento delle visualizzazioni negli ultimi 30 giorni</p>
            </div>
            <TrendingUp className="w-5 h-5 text-amber-500" />
          </div>
          <div className="h-64 flex items-end gap-3 pt-6 pb-2 border-b border-stone-800">
            {[45, 60, 55, 70, 85, 95, 80, 110, 125, 115, 140, 160].map((val, idx) => (
              <div key={idx} className="flex-1 bg-stone-800 hover:bg-amber-500 rounded-t-lg transition-colors relative group" style={{ height: `${val}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-950 text-stone-200 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-stone-800">
                  {val * 120} visite
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-stone-500">
            <span>1 Sett</span>
            <span>10 Sett</span>
            <span>20 Sett</span>
            <span>Oggi</span>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <h3 className="text-lg font-display font-bold text-stone-100">Attività Recenti</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-800/50 border border-stone-800 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
              <div>
                <div className="font-semibold text-stone-200">Nuovo articolo pubblicato nel Blog</div>
                <div className="text-stone-400 mt-0.5">"Il Futuro del Branding nel 2026"</div>
                <div className="text-stone-500 text-[10px] mt-1">4 Ottobre 2026</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-800/50 border border-stone-800 text-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
              <div>
                <div className="font-semibold text-stone-200">Nuova richiesta di contatto ricevuta</div>
                <div className="text-stone-400 mt-0.5">Giovanni Bianchi - Bianchi Design Srl</div>
                <div className="text-stone-500 text-[10px] mt-1">5 Ottobre 2026</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-800/50 border border-stone-800 text-xs">
              <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
              <div>
                <div className="font-semibold text-stone-200">Progetto portfolio aggiornato</div>
                <div className="text-stone-400 mt-0.5">Luminaire Paris – Luxury Lighting Rebrand</div>
                <div className="text-stone-500 text-[10px] mt-1">1 Ottobre 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
