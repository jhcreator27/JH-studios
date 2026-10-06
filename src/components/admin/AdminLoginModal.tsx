import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Shield, Lock, User, AlertCircle } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
  const { setIsAdminLoggedIn, setCurrentView, showToast } = useApp();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('jhstudios2026');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'jhstudios2026') {
      setIsAdminLoggedIn(true);
      setCurrentView('admin_dashboard');
      onClose();
      showToast('Accesso effettuato con successo all’Area Amministrativa');
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-stone-900 border border-stone-800 w-full max-w-md rounded-3xl p-8 space-y-6 text-stone-100 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-stone-400 hover:text-white rounded-full bg-stone-800">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-display font-bold">Area Amministrativa</h3>
          <p className="text-xs text-stone-400">Inserisci le credenziali per accedere alla dashboard JH studios.</p>
        </div>

        {error && (
          <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Credenziali non valide. Prova utente: admin, password: jhstudios2026</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-stone-400 font-semibold">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 w-4 h-4 text-stone-500" />
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-stone-400 font-semibold">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 w-4 h-4 text-stone-500" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-sm"
          >
            Accedi alla Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};
