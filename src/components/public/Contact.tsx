import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const { generalSettings, addContactRequest } = useApp();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Marketing Strategy',
    budget: '€ 2.000 - € 5.000',
    message: '',
    privacyAccepted: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setFormStatus('error');
      setErrorMessage('Compila tutti i campi obbligatori.');
      return;
    }
    if (!formData.privacyAccepted) {
      setFormStatus('error');
      setErrorMessage('È necessario accettare la Privacy Policy per procedere.');
      return;
    }

    setFormStatus('loading');

    setTimeout(() => {
      addContactRequest({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message
      });
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: 'Marketing Strategy',
        budget: '€ 2.000 - € 5.000',
        message: '',
        privacyAccepted: false
      });
    }, 1200);
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Contatti & Progetti</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-4xl leading-[1.08]">
            Parliamo del tuo prossimo <span className="text-amber-600">grande successo.</span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            Compila il modulo sottostante o contattaci direttamente attraverso i nostri canali. Rispondiamo entro 24 ore lavorative.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">Informazioni di Contatto</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                Siamo presenti con laboratori creativi e uffici di rappresentanza nei principali hub europei.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <Mail className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-stone-500 font-medium">Email Diretta</div>
                  <a href={`mailto:${generalSettings.email}`} className="text-stone-900 dark:text-stone-100 font-semibold hover:text-amber-600 transition-colors text-base">{generalSettings.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <Phone className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-stone-500 font-medium">Telefono</div>
                  <a href={`tel:${generalSettings.phone}`} className="text-stone-900 dark:text-stone-100 font-semibold hover:text-amber-600 transition-colors text-base">{generalSettings.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <MapPin className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-stone-500 font-medium">Sede Principale</div>
                  <div className="text-stone-900 dark:text-stone-100 font-semibold text-base">{generalSettings.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <Clock className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-stone-500 font-medium">Orari di Lavoro</div>
                  <div className="text-stone-900 dark:text-stone-100 font-semibold text-base">{generalSettings.workingHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 md:p-12 rounded-3xl">
            {formStatus === 'success' ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50">Richiesta Inviata con Successo!</h3>
                <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto text-sm leading-relaxed">
                  Grazie per averci contattato. Un nostro project manager esaminerà la tua richiesta e ti ricontatterà entro 24 ore.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-3 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-semibold rounded-xl text-sm transition-colors"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-stone-900 dark:text-stone-50 mb-2">Raccontaci il tuo progetto</h3>
                
                {formStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">Nome *</label>
                    <input
                      type="text"
                      placeholder="Mario"
                      value={formData.firstName}
                      onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">Cognome *</label>
                    <input
                      type="text"
                      placeholder="Rossi"
                      value={formData.lastName}
                      onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">Email *</label>
                    <input
                      type="email"
                      placeholder="mario.rossi@azienda.it"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">Telefono</label>
                    <input
                      type="tel"
                      placeholder="+39 333 1234567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">Azienda</label>
                    <input
                      type="text"
                      placeholder="Nome Azienda Srl"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">Servizio Richiesto</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-600"
                    >
                      <option value="Marketing Strategy">Marketing Strategy</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Branding & Identity">Branding & Identity</option>
                      <option value="Web Design & UX/UI">Web Design & UX/UI</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Advertising">Advertising</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">Budget Previsto</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-600"
                  >
                    <option value="< € 2.000">&lt; € 2.000</option>
                    <option value="€ 2.000 - € 5.000">€ 2.000 - € 5.000</option>
                    <option value="€ 5.000 - € 10.000">€ 5.000 - € 10.000</option>
                    <option value="> € 10.000">&gt; € 10.000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">Messaggio *</label>
                  <textarea
                    rows={4}
                    placeholder="Raccontaci i tuoi obiettivi, le tue sfide e le tempistiche..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-600 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onChange={e => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="w-4 h-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor="privacy" className="text-xs text-stone-600 dark:text-stone-400">
                    Acconsento al trattamento dei dati personali secondo la Privacy Policy *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  {formStatus === 'loading' ? (
                    <span>Invio in corso...</span>
                  ) : (
                    <>
                      <span>Invia richiesta</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
