import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, CheckCircle2, Instagram, Facebook, Linkedin, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, generalSettings, socialSettings, showToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    showToast('Iscrizione alla newsletter completata con successo!');
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="bg-stone-800/60 rounded-2xl p-8 md:p-12 mb-16 border border-stone-700/50 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-stone-100 mb-2">
              Rimani aggiornato sulle tendenze digitali
            </h3>
            <p className="text-stone-400 text-sm max-w-xl">
              Iscriviti alla nostra newsletter esclusiva per ricevere approfondimenti su marketing, design e strategie di comunicazione.
            </p>
          </div>
          {newsletterSubscribed ? (
            <div className="flex items-center gap-3 bg-stone-900 px-6 py-4 rounded-xl border border-stone-700 text-stone-200">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium">Iscrizione completata con successo!</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Il tuo nome"
                value={newsletterName}
                onChange={e => setNewsletterName(e.target.value)}
                required
                className="px-4 py-3 bg-stone-900 border border-stone-700 rounded-xl text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500"
              />
              <input
                type="email"
                placeholder="La tua email"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                required
                className="px-4 py-3 bg-stone-900 border border-stone-700 rounded-xl text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Iscriviti</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* 4 Columns Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-stone-800">
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-display font-bold text-stone-100">
              <span>{generalSettings.agencyName}</span>
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              {generalSettings.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href={socialSettings.instagram} target="_blank" rel="noreferrer" className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={socialSettings.facebook} target="_blank" rel="noreferrer" className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={socialSettings.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={socialSettings.youtube} target="_blank" rel="noreferrer" className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-300 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={socialSettings.x} target="_blank" rel="noreferrer" className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-300 hover:text-white transition-colors" aria-label="X">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-100 font-display">Navigazione</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => { setCurrentView('home'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Home</button></li>
              <li><button onClick={() => { setCurrentView('about'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Chi siamo</button></li>
              <li><button onClick={() => { setCurrentView('services'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Servizi</button></li>
              <li><button onClick={() => { setCurrentView('destinations'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Destinazioni</button></li>
              <li><button onClick={() => { setCurrentView('portfolio'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Portfolio</button></li>
              <li><button onClick={() => { setCurrentView('blog'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Blog</button></li>
              <li><button onClick={() => { setCurrentView('contact'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Contatti</button></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-100 font-display">Servizi Principali</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => { setCurrentView('services'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Marketing Strategy</button></li>
              <li><button onClick={() => { setCurrentView('services'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Social Media Management</button></li>
              <li><button onClick={() => { setCurrentView('services'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Graphic Design & Branding</button></li>
              <li><button onClick={() => { setCurrentView('services'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Content Creation</button></li>
              <li><button onClick={() => { setCurrentView('services'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Web Design & UX/UI</button></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-100 font-display">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${generalSettings.email}`} className="hover:text-stone-100 transition-colors">{generalSettings.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${generalSettings.phone}`} className="hover:text-stone-100 transition-colors">{generalSettings.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{generalSettings.address}</span>
              </li>
              <li className="text-xs text-stone-400 pt-1">
                {generalSettings.workingHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {generalSettings.agencyName}. Tutti i diritti riservati. P.IVA 12345678901</p>
          <div className="flex items-center gap-6">
            <button onClick={() => { setCurrentView('contact'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Privacy Policy</button>
            <button onClick={() => { setCurrentView('contact'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Cookie Policy</button>
            <button onClick={() => { setCurrentView('contact'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-stone-100 transition-colors">Termini e Condizioni</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
