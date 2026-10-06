import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  FileText,
  Layers,
  Briefcase,
  Compass,
  BookOpen,
  Image as ImageIcon,
  Menu as MenuIcon,
  Search,
  Share2,
  Palette,
  Settings as SettingsIcon,
  LogOut,
  ExternalLink,
  Shield,
  Menu,
  X
} from 'lucide-react';

import { AdminDashboardHome } from './AdminDashboardHome';
import { AdminServices } from './AdminServices';
import { AdminPortfolio } from './AdminPortfolio';
import { AdminDestinations } from './AdminDestinations';
import { AdminBlog } from './AdminBlog';
import { AdminMedia } from './AdminMedia';
import { AdminMenu } from './AdminMenu';
import { AdminSEO } from './AdminSEO';
import { AdminSocial } from './AdminSocial';
import { AdminTheme } from './AdminTheme';
import { AdminSettings } from './AdminSettings';

export const AdminLayout: React.FC = () => {
  const { currentView, setCurrentView, setIsAdminLoggedIn, generalSettings } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('jh_admin_auth');
    setCurrentView('home');
  };

  const navItems = [
    { id: 'admin_dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'admin_services', label: 'Servizi', icon: Layers },
    { id: 'admin_portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'admin_destinations', label: 'Destinazioni', icon: Compass },
    { id: 'admin_blog', label: 'Blog', icon: BookOpen },
    { id: 'admin_media', label: 'Media Library', icon: ImageIcon },
    { id: 'admin_menu', label: 'Gestione Menu', icon: MenuIcon },
    { id: 'admin_seo', label: 'SEO & Schema', icon: Search },
    { id: 'admin_social', label: 'Social Media', icon: Share2 },
    { id: 'admin_theme', label: 'Aspetto & Tema', icon: Palette },
    { id: 'admin_settings', label: 'Impostazioni & Contatti', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col md:flex-row">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden flex items-center justify-between p-4 bg-stone-900 border-b border-stone-800">
        <div className="flex items-center gap-2 font-display font-bold text-lg">
          <Shield className="w-5 h-5 text-amber-500" />
          <span>{generalSettings.agencyName} Admin</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-stone-300">
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-72 bg-stone-900 border-r border-stone-800 flex flex-col transition-transform duration-200 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 border-b border-stone-800 hidden md:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-display font-bold">
            JH
          </div>
          <div>
            <div className="font-display font-bold text-stone-100">{generalSettings.agencyName}</div>
            <div className="text-xs text-stone-400">Dashboard Amministrativa</div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setCurrentView(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-stone-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-stone-800 space-y-2">
          <button
            onClick={() => setCurrentView('home')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-amber-500" />
            <span>Vai al Sito Pubblico</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Disconnetti</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {currentView === 'admin_dashboard' && <AdminDashboardHome />}
          {currentView === 'admin_services' && <AdminServices />}
          {currentView === 'admin_portfolio' && <AdminPortfolio />}
          {currentView === 'admin_destinations' && <AdminDestinations />}
          {currentView === 'admin_blog' && <AdminBlog />}
          {currentView === 'admin_media' && <AdminMedia />}
          {currentView === 'admin_menu' && <AdminMenu />}
          {currentView === 'admin_seo' && <AdminSEO />}
          {currentView === 'admin_social' && <AdminSocial />}
          {currentView === 'admin_theme' && <AdminTheme />}
          {currentView === 'admin_settings' && <AdminSettings />}
        </div>
      </main>
    </div>
  );
};
