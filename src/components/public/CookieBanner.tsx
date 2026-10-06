import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Sliders, Check } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('jh_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(consent);
        if (typeof parsed === 'object') {
          setAnalytics(!!parsed.analytics);
          setMarketing(!!parsed.marketing);
        }
      } catch {
        // legacy string
      }
    }

    const handleOpenPreferences = () => {
      setShowModal(true);
    };

    window.addEventListener('open-cookie-preferences', handleOpenPreferences);
    return () => {
      window.removeEventListener('open-cookie-preferences', handleOpenPreferences);
    };
  }, []);

  const handleAcceptAll = () => {
    const preferences = { necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() };
    localStorage.setItem('jh_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    const preferences = { necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() };
    localStorage.setItem('jh_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    const preferences = { necessary: true, analytics, marketing, timestamp: new Date().toISOString() };
    localStorage.setItem('jh_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {showBanner && (
        <aside aria-label="Consenso Cookie" className="fixed bottom-0 left-0 w-full z-50 bg-stone-900/95 backdrop-blur-md text-stone-200 border-t border-stone-800 p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-stone-100">La tua privacy conta.</h4>
                <p className="text-xs text-stone-400 leading-relaxed max-w-3xl">
                  Utilizziamo cookie e tecnologie simili per garantire il funzionamento del sito e, con il tuo consenso, migliorare esperienza e analisi.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2.5 text-xs font-semibold text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Personalizza</span>
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2.5 text-xs font-semibold text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-sm"
              >
                Accetta tutti
              </button>
            </div>
          </div>
        </aside>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden text-stone-100 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-display font-bold">Preferenze Cookie</h3>
              </div>
              <button onClick={() => setShowModal(false)} className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Gestisci le tue preferenze sui cookie. Puoi abilitare o disabilitare le categorie facoltative in qualsiasi momento.
            </p>

            <div className="space-y-4">
              {/* Necessary */}
              <div className="p-4 rounded-2xl bg-stone-800/50 border border-stone-800 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-stone-200">Cookie necessari (Sempre attivi)</h4>
                  <p className="text-xs text-stone-400">Necessari per il corretto funzionamento del sito, autenticazione e preferenze di sicurezza.</p>
                </div>
                <input type="checkbox" checked disabled className="w-4 h-4 accent-amber-500 mt-1 cursor-not-allowed" />
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-stone-800/50 border border-stone-800 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-stone-200">Cookie analitici</h4>
                  <p className="text-xs text-stone-400">Ci aiutano a comprendere come viene utilizzato il sito tramite statistiche aggregate e anonime.</p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={e => setAnalytics(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 mt-1 cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-2xl bg-stone-800/50 border border-stone-800 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-stone-200">Cookie marketing</h4>
                  <p className="text-xs text-stone-400">Utilizzati per eventuali funzionalità pubblicitarie e di personalizzazione delle campagne.</p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={e => setMarketing(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 mt-1 cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl text-xs font-semibold transition-colors"
              >
                Rifiuta tutti
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
              >
                <Check className="w-4 h-4" />
                <span>Salva preferenze</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
