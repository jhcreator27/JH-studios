import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Menu, X, Search, Sun, Moon, Shield, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenAdminAuth: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenAdminAuth }) => {
  const { currentView, setCurrentView, menuItems, themeSettings, updateThemeSettings, isAdminLoggedIn } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const visibleMenu = menuItems.filter(item => item.visible).sort((a, b) => a.order - b.order);

  const handleNavClick = (path: string) => {
    setCurrentView(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand title, one line */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 text-left"
        >
          <span>JH studios</span>
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
        </button>

        {/* Zone 2: 4-6 nav links, single-line */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
          {visibleMenu.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.path)}
              className={`transition-colors hover:text-stone-900 dark:hover:text-stone-50 whitespace-nowrap ${
                currentView === item.path ? 'text-stone-900 dark:text-stone-50 font-semibold underline underline-offset-8 decoration-amber-600' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-50 transition-colors rounded-full hover:bg-stone-200/50 dark:hover:bg-stone-800/50"
            aria-label="Cerca nel sito"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => updateThemeSettings({ darkMode: !themeSettings.darkMode })}
            className="p-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-50 transition-colors rounded-full hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hidden sm:block"
            aria-label="Cambia tema"
          >
            {themeSettings.darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => {
              if (isAdminLoggedIn) {
                setCurrentView('admin_dashboard');
              } else {
                onOpenAdminAuth();
              }
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 dark:text-stone-200 bg-stone-200/60 dark:bg-stone-800 rounded-lg hover:bg-stone-300/70 transition-colors"
            title="Area Amministrativa"
          >
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>{isAdminLoggedIn ? 'Admin' : 'Login Admin'}</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-stone-50 bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-sm whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Parliamo del tuo progetto</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-stone-700 dark:text-stone-300 lg:hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 px-6 py-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          {visibleMenu.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.path)}
              className={`text-left text-lg font-display py-2 transition-colors ${
                currentView === item.path ? 'text-amber-600 font-bold' : 'text-stone-700 dark:text-stone-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-3">
            <button
              onClick={() => {
                if (isAdminLoggedIn) {
                  setCurrentView('admin_dashboard');
                } else {
                  onOpenAdminAuth();
                }
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-stone-200 dark:bg-stone-800 rounded-lg text-stone-900 dark:text-stone-100"
            >
              <Shield className="w-4 h-4 text-amber-600" />
              <span>{isAdminLoggedIn ? 'Dashboard Amministrativa' : 'Login Admin'}</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 rounded-lg shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Parliamo del tuo progetto</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
