import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Service,
  Project,
  Destination,
  BlogPost,
  ContactRequest,
  MediaItem,
  MenuItem,
  ThemeSettings,
  SEOSettings,
  SocialSettings,
  GeneralSettings
} from '../types';
import {
  initialServices,
  initialProjects,
  initialDestinations,
  initialBlogPosts,
  initialContactRequests,
  initialMediaItems,
  initialMenuItems,
  initialThemeSettings,
  initialSEOSettings,
  initialSocialSettings,
  initialGeneralSettings
} from '../data/initialData';

interface AppContextType {
  currentView: string;
  setCurrentView: (view: string) => void;
  selectedEntityId: string | null;
  setSelectedEntityId: (id: string | null) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (loggedIn: boolean) => void;
  
  services: Service[];
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;

  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  destinations: Destination[];
  addDestination: (destination: Omit<Destination, 'id'>) => void;
  updateDestination: (id: string, destination: Partial<Destination>) => void;
  deleteDestination: (id: string) => void;

  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;

  contactRequests: ContactRequest[];
  addContactRequest: (request: Omit<ContactRequest, 'id' | 'date' | 'status'>) => void;
  updateContactRequestStatus: (id: string, status: ContactRequest['status']) => void;
  deleteContactRequest: (id: string) => void;

  mediaItems: MediaItem[];
  addMediaItem: (item: Omit<MediaItem, 'id' | 'date'>) => void;
  deleteMediaItem: (id: string) => void;

  menuItems: MenuItem[];
  updateMenuItems: (items: MenuItem[]) => void;

  themeSettings: ThemeSettings;
  updateThemeSettings: (settings: Partial<ThemeSettings>) => void;

  seoSettings: SEOSettings;
  updateSEOSettings: (settings: Partial<SEOSettings>) => void;

  socialSettings: SocialSettings;
  updateSocialSettings: (settings: Partial<SocialSettings>) => void;

  generalSettings: GeneralSettings;
  updateGeneralSettings: (settings: Partial<GeneralSettings>) => void;

  resetToDefaults: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('jh_admin_auth') === 'true';
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Persistent State helpers
  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('jh_services');
    return saved ? JSON.parse(saved) : initialServices;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('jh_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [destinations, setDestinations] = useState<Destination[]>(() => {
    const saved = localStorage.getItem('jh_destinations');
    return saved ? JSON.parse(saved) : initialDestinations;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('jh_blog');
    return saved ? JSON.parse(saved) : initialBlogPosts;
  });

  const [contactRequests, setContactRequests] = useState<ContactRequest[]>(() => {
    const saved = localStorage.getItem('jh_contacts');
    return saved ? JSON.parse(saved) : initialContactRequests;
  });

  const [mediaItems, setMediaItems] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem('jh_media');
    return saved ? JSON.parse(saved) : initialMediaItems;
  });

  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('jh_menu');
    return saved ? JSON.parse(saved) : initialMenuItems;
  });

  const [themeSettings, setThemeSettings] = useState<ThemeSettings>(() => {
    const saved = localStorage.getItem('jh_theme');
    return saved ? JSON.parse(saved) : initialThemeSettings;
  });

  const [seoSettings, setSeoSettings] = useState<SEOSettings>(() => {
    const saved = localStorage.getItem('jh_seo');
    return saved ? JSON.parse(saved) : initialSEOSettings;
  });

  const [socialSettings, setSocialSettings] = useState<SocialSettings>(() => {
    const saved = localStorage.getItem('jh_social');
    return saved ? JSON.parse(saved) : initialSocialSettings;
  });

  const [generalSettings, setGeneralSettings] = useState<GeneralSettings>(() => {
    const saved = localStorage.getItem('jh_general');
    return saved ? JSON.parse(saved) : initialGeneralSettings;
  });

  // Save effects
  useEffect(() => { localStorage.setItem('jh_services', JSON.stringify(services)); }, [services]);
  useEffect(() => { localStorage.setItem('jh_projects', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem('jh_destinations', JSON.stringify(destinations)); }, [destinations]);
  useEffect(() => { localStorage.setItem('jh_blog', JSON.stringify(blogPosts)); }, [blogPosts]);
  useEffect(() => { localStorage.setItem('jh_contacts', JSON.stringify(contactRequests)); }, [contactRequests]);
  useEffect(() => { localStorage.setItem('jh_media', JSON.stringify(mediaItems)); }, [mediaItems]);
  useEffect(() => { localStorage.setItem('jh_menu', JSON.stringify(menuItems)); }, [menuItems]);
  useEffect(() => { localStorage.setItem('jh_theme', JSON.stringify(themeSettings)); }, [themeSettings]);
  useEffect(() => { localStorage.setItem('jh_seo', JSON.stringify(seoSettings)); }, [seoSettings]);
  useEffect(() => { localStorage.setItem('jh_social', JSON.stringify(socialSettings)); }, [socialSettings]);
  useEffect(() => { localStorage.setItem('jh_general', JSON.stringify(generalSettings)); }, [generalSettings]);
  useEffect(() => { localStorage.setItem('jh_admin_auth', String(isAdminLoggedIn)); }, [isAdminLoggedIn]);

  // Actions
  const addService = (data: Omit<Service, 'id'>) => {
    const newService = { ...data, id: 's_' + Date.now() };
    setServices([newService, ...services]);
    showToast('Servizio aggiunto con successo');
  };

  const updateService = (id: string, data: Partial<Service>) => {
    setServices(services.map(s => s.id === id ? { ...s, ...data } : s));
    showToast('Servizio aggiornato con successo');
  };

  const deleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
    showToast('Servizio eliminato');
  };

  const addProject = (data: Omit<Project, 'id'>) => {
    const newProject = { ...data, id: 'p_' + Date.now() };
    setProjects([newProject, ...projects]);
    showToast('Progetto aggiunto con successo');
  };

  const updateProject = (id: string, data: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...data } : p));
    showToast('Progetto aggiornato con successo');
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    showToast('Progetto eliminato');
  };

  const addDestination = (data: Omit<Destination, 'id'>) => {
    const newDest = { ...data, id: 'd_' + Date.now() };
    setDestinations([newDest, ...destinations]);
    showToast('Destinazione aggiunta');
  };

  const updateDestination = (id: string, data: Partial<Destination>) => {
    setDestinations(destinations.map(d => d.id === id ? { ...d, ...data } : d));
    showToast('Destinazione aggiornata');
  };

  const deleteDestination = (id: string) => {
    setDestinations(destinations.filter(d => d.id !== id));
    showToast('Destinazione eliminata');
  };

  const addBlogPost = (data: Omit<BlogPost, 'id'>) => {
    const newPost = { ...data, id: 'b_' + Date.now() };
    setBlogPosts([newPost, ...blogPosts]);
    showToast('Articolo creato con successo');
  };

  const updateBlogPost = (id: string, data: Partial<BlogPost>) => {
    setBlogPosts(blogPosts.map(b => b.id === id ? { ...b, ...data } : b));
    showToast('Articolo aggiornato con successo');
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(blogPosts.filter(b => b.id !== id));
    showToast('Articolo eliminato');
  };

  const addContactRequest = (data: Omit<ContactRequest, 'id' | 'date' | 'status'>) => {
    const newReq: ContactRequest = {
      ...data,
      id: 'c_' + Date.now(),
      date: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' }),
      status: 'Nuovo'
    };
    setContactRequests([newReq, ...contactRequests]);
    showToast('Richiesta inviata con successo');
  };

  const updateContactRequestStatus = (id: string, status: ContactRequest['status']) => {
    setContactRequests(contactRequests.map(c => c.id === id ? { ...c, status } : c));
    showToast('Stato richiesta aggiornato');
  };

  const deleteContactRequest = (id: string) => {
    setContactRequests(contactRequests.filter(c => c.id !== id));
    showToast('Richiesta eliminata');
  };

  const addMediaItem = (item: Omit<MediaItem, 'id' | 'date'>) => {
    const newMedia: MediaItem = {
      ...item,
      id: 'm_' + Date.now(),
      date: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })
    };
    setMediaItems([newMedia, ...mediaItems]);
    showToast('File caricato con successo');
  };

  const deleteMediaItem = (id: string) => {
    setMediaItems(mediaItems.filter(m => m.id !== id));
    showToast('File eliminato');
  };

  const updateMenuItems = (items: MenuItem[]) => {
    setMenuItems(items);
    showToast('Menu aggiornato');
  };

  const updateThemeSettings = (settings: Partial<ThemeSettings>) => {
    setThemeSettings(prev => ({ ...prev, ...settings }));
    showToast('Tema aggiornato');
  };

  const updateSEOSettings = (settings: Partial<SEOSettings>) => {
    setSeoSettings(prev => ({ ...prev, ...settings }));
    showToast('Impostazioni SEO salvate');
  };

  const updateSocialSettings = (settings: Partial<SocialSettings>) => {
    setSocialSettings(prev => ({ ...prev, ...settings }));
    showToast('Canali social aggiornati');
  };

  const updateGeneralSettings = (settings: Partial<GeneralSettings>) => {
    setGeneralSettings(prev => ({ ...prev, ...settings }));
    showToast('Impostazioni generali salvate');
  };

  const resetToDefaults = () => {
    localStorage.clear();
    setServices(initialServices);
    setProjects(initialProjects);
    setDestinations(initialDestinations);
    setBlogPosts(initialBlogPosts);
    setContactRequests(initialContactRequests);
    setMediaItems(initialMediaItems);
    setMenuItems(initialMenuItems);
    setThemeSettings(initialThemeSettings);
    setSeoSettings(initialSEOSettings);
    setSocialSettings(initialSocialSettings);
    setGeneralSettings(initialGeneralSettings);
    showToast('Dati ripristinati alle impostazioni predefinite');
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedEntityId,
        setSelectedEntityId,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        services,
        addService,
        updateService,
        deleteService,
        projects,
        addProject,
        updateProject,
        deleteProject,
        destinations,
        addDestination,
        updateDestination,
        deleteDestination,
        blogPosts,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        contactRequests,
        addContactRequest,
        updateContactRequestStatus,
        deleteContactRequest,
        mediaItems,
        addMediaItem,
        deleteMediaItem,
        menuItems,
        updateMenuItems,
        themeSettings,
        updateThemeSettings,
        seoSettings,
        updateSEOSettings,
        socialSettings,
        updateSocialSettings,
        generalSettings,
        updateGeneralSettings,
        resetToDefaults,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
