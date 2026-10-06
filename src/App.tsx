/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/public/Header';
import { Footer } from './components/public/Footer';
import { CookieBanner } from './components/public/CookieBanner';
import { SearchModal } from './components/public/SearchModal';
import { Home } from './components/public/Home';
import { About } from './components/public/About';
import { Services } from './components/public/Services';
import { Destinations } from './components/public/Destinations';
import { Portfolio } from './components/public/Portfolio';
import { Blog } from './components/public/Blog';
import { Contact } from './components/public/Contact';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { CheckCircle2 } from 'lucide-react';

function MainContent() {
  const { currentView, toastMessage, themeSettings } = useApp();
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const isAdminView = currentView.startsWith('admin_');

  return (
    <div className={`min-h-screen flex flex-col transition-colors ${themeSettings.darkMode ? 'dark bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'}`}>
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-stone-900 text-stone-100 px-6 py-3.5 rounded-2xl shadow-2xl border border-stone-800 flex items-center gap-3 animate-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {isAdminView ? (
        <AdminLayout />
      ) : (
        <>
          <Header onOpenSearch={() => setSearchOpen(true)} onOpenAdminAuth={() => setLoginModalOpen(true)} />
          <main className="flex-1">
            {currentView === 'home' && <Home />}
            {currentView === 'about' && <About />}
            {currentView === 'services' && <Services />}
            {currentView === 'destinations' && <Destinations />}
            {currentView === 'portfolio' && <Portfolio />}
            {currentView === 'blog' && <Blog />}
            {currentView === 'contact' && <Contact />}
          </main>
          <Footer />
          <CookieBanner />
        </>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <AdminLoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
