import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('jh_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('jh_cookie_consent', 'all');
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('jh_cookie_consent', 'necessary');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-stone-900/95 backdrop-blur-md text-stone-200 border-t border-stone-800 p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
          <div className="space-y-1">
            <h4 className="font-display font-semibold text-stone-100">Informativa sulla Privacy e sui Cookie</h4>
            <p className="text-xs text-stone-400 leading-relaxed max-w-3xl">
              Utilizziamo cookie propri e di terze parti per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti. Puoi accettare tutti i cookie o rifiutare quelli non essenziali.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleRejectAll}
            className="px-4 py-2.5 text-xs font-semibold text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors whitespace-nowrap"
          >
            Solo necessari
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
};
