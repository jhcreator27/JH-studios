import {
  Service,
  Project,
  Destination,
  BlogPost,
  Testimonial,
  TeamMember,
  ContactRequest,
  MediaItem,
  MenuItem,
  ThemeSettings,
  SEOSettings,
  SocialSettings,
  GeneralSettings
} from '../types';

export const initialServices: Service[] = [
  {
    id: 's1',
    title: 'Marketing Strategy',
    slug: 'marketing-strategy',
    shortDescription: 'Pianificazione strategica omnicanale per accelerare la crescita del brand e massimizzare il ROI.',
    fullDescription: 'Analizziamo il mercato, i competitor e il target per costruire una roadmap strategica su misura. Definiamo funnel di conversione avanzati, allocazione del budget e KPI di performance misurabili per garantire un posizionamento di successo.',
    image: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
    benefits: ['Aumento del ROI pubblicitario', 'Visione di mercato chiara', 'Decisioni basate sui dati'],
    features: ['Analisi Competitor', 'Definizione KPI', 'Funnel di Conversione', 'Media Planning'],
    pricePlaceholder: 'A partire da € 2.500'
  },
  {
    id: 's2',
    title: 'Social Media Management',
    slug: 'social-media-management',
    shortDescription: 'Gestione professionale dei canali social per costruire community ingaggiate e autorevoli.',
    fullDescription: 'Curiamo ogni aspetto della presenza social del tuo brand: dalla stesura del piano editoriale alla produzione di contenuti visivi e testuali di altissimo profilo, monitorando costantemente le metriche di interazione.',
    image: '/src/assets/images/portfolio_social_1791274381072.jpg',
    benefits: ['Community fidelizzata', 'Brand awareness costante', 'Tone of voice distintivo'],
    features: ['Piano Editoriale', 'Copywriting persuasivo', 'Community Management', 'Report Mensili'],
    pricePlaceholder: 'A partire da € 1.200 / mese'
  },
  {
    id: 's3',
    title: 'Social Media Strategy',
    slug: 'social-media-strategy',
    shortDescription: 'Strategie mirate per posizionare il brand sulle piattaforme social con contenuti di valore.',
    fullDescription: 'Non basta esserci, bisogna saper comunicare. Studiamo strategie organiche e paid studiate per convertire i follower in clienti affezionati, sfruttando i trend e le specificità di ogni piattaforma.',
    image: '/src/assets/images/blog_cover_1791274392023.jpg',
    benefits: ['Posizionamento di mercato', 'Crescita organica mirata', 'Coinvolgimento del pubblico'],
    features: ['Analisi dei Trend', 'Strategia Editoriale', 'Briefing Creator', 'Analisi Competitiva'],
    pricePlaceholder: 'A partire da € 1.800'
  },
  {
    id: 's4',
    title: 'Graphic Design',
    slug: 'graphic-design',
    shortDescription: 'Design visivo d’impatto per comunicare l’identità aziendale con eleganza e coerenza.',
    fullDescription: 'Creiamo materiali di comunicazione coordinati, presentazioni aziendali, cataloghi, ADV offline e digitali che catturano l’attenzione e riflettono l’eccellenza del vostro marchio.',
    image: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    benefits: ['Immagine coordinata impeccabile', 'Comunicazione visiva efficace', 'Distinzione dai competitor'],
    features: ['Brand Identity', 'Materiali Editoriali', 'Adv Grafiche', 'Infografiche'],
    pricePlaceholder: 'A partire da € 950'
  },
  {
    id: 's5',
    title: 'Branding & Identity',
    slug: 'branding',
    shortDescription: 'Costruzione di identità di marca memorabili, valoriali e visivamente straordinarie.',
    fullDescription: 'Dalla scelta del naming alla definizione del logo, delle linee guida visive e della palette cromatica. Diamo un’anima e un volto riconoscibile al vostro business.',
    image: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    benefits: ['Riconoscibilità immediata', 'Valore percepito elevato', 'Coerenza su tutti i touchpoint'],
    features: ['Logo Design', 'Brand Guidelines', 'Typography & Palette', 'Voice of Brand'],
    pricePlaceholder: 'A partire da € 3.200'
  },
  {
    id: 's6',
    title: 'Content Creation',
    slug: 'content-creation',
    shortDescription: 'Produzione di contenuti multimediali originali, narrativi ed emozionanti.',
    fullDescription: 'Scrittura, direzione artistica, produzione video e shooting fotografici pensati per raccontare la storia del brand e stimolare l’azione del pubblico.',
    image: '/src/assets/images/blog_cover_1791274392023.jpg',
    benefits: ['Contenuti originali e proprietari', 'Coinvolgimento emotivo', 'Versatilità cross-platform'],
    features: ['Video Commerciali', 'Copywriting narrativo', 'Reels & TikTok', 'Copy & Script'],
    pricePlaceholder: 'A partire da € 1.500'
  },
  {
    id: 's7',
    title: 'Product Photography',
    slug: 'product-photography',
    shortDescription: 'Fotografia di prodotto di alta gamma per e-commerce, cataloghi e campagne adv.',
    fullDescription: 'Valorizziamo ogni dettaglio dei vostri prodotti attraverso still life curati, illuminazione professionale e post-produzione raffinata.',
    image: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    benefits: ['Valorizzazione del prodotto', 'Incremento conversioni e-commerce', 'Standard visivi di lusso'],
    features: ['Still Life', 'Ambientate', 'Post-produzione avanzata', 'Formati ottimizzati web'],
    pricePlaceholder: 'A partire da € 900'
  },
  {
    id: 's8',
    title: 'Web Design & UX/UI',
    slug: 'web-design',
    shortDescription: 'Siti web e piattaforme digitali sartoriali, veloci, responsive e orientate alla conversione.',
    fullDescription: 'Progettiamo e sviluppiamo esperienze digitali uniche, unendo un’estetica minimalista ed elegante a performance tecniche impeccabili.',
    image: '/src/assets/images/destination_image_1791274400203.jpg',
    benefits: ['Esperienza utente fluida', 'Tassi di conversione superiori', 'Design custom e moderno'],
    features: ['UI/UX Design', 'Sviluppo Frontend/Backend', 'Ottimizzazione SEO', 'Responsive Design'],
    pricePlaceholder: 'A partire da € 3.500'
  },
  {
    id: 's9',
    title: 'Advertising & Performance',
    slug: 'advertising',
    shortDescription: 'Campagne pubblicitarie mirate su Google, Meta, LinkedIn e TikTok ad alto ritorno.',
    fullDescription: 'Gestiamo budget pubblicitari con un approccio analitico rigoroso, ottimizzando ogni euro investito per generare lead qualificati e vendite.',
    image: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
    benefits: ['Lead qualificati in target', 'Controllo millimetrico del budget', 'Crescita accelerata delle vendite'],
    features: ['Google Ads', 'Meta ADV', 'LinkedIn Ads', 'A/B Testing continuo'],
    pricePlaceholder: 'A partire da € 1.500 / mese'
  },
  {
    id: 's10',
    title: 'Digital Strategy',
    slug: 'digital-strategy',
    shortDescription: 'Visione d’insieme e piani di trasformazione digitale per aziende orientate al futuro.',
    fullDescription: 'Integriamo tecnologia, marketing e processi aziendali per accompagnare l’impresa in un percorso di crescita digitale strutturato e duraturo.',
    image: '/src/assets/images/destination_image_1791274400203.jpg',
    benefits: ['Innovazione d’impresa', 'Processi digitali integrati', 'Vantaggio competitivo duraturo'],
    features: ['Audit Digitale', 'Roadmap Strategica', 'Integrazione Canali', 'Formazione Team'],
    pricePlaceholder: 'A partire da € 4.000'
  }
];

export const initialProjects: Project[] = [
  {
    id: 'p1',
    title: 'Luminaire Paris – Luxury Lighting Rebrand',
    slug: 'luminaire-paris',
    client: 'Luminaire Paris S.A.',
    category: 'Branding',
    image: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    gallery: [
      '/src/assets/images/portfolio_branding_1791274372060.jpg',
      '/src/assets/images/hero_marketing_studio_1791274361323.jpg'
    ],
    description: 'Ridefinizione completa della brand identity e del packaging per un marchio storico dell’illuminazione di lusso francese.',
    servicesUsed: ['Branding', 'Graphic Design', 'Product Photography'],
    year: '2025',
    result: '+140% di incremento nelle vendite online e posizionamento premium nei mercati internazionali.',
    link: 'https://example.com'
  },
  {
    id: 'p2',
    title: 'Vogue & Co. – Social Growth & Content',
    slug: 'vogue-co',
    client: 'Vogue & Co. Milano',
    category: 'Social Media',
    image: '/src/assets/images/portfolio_social_1791274381072.jpg',
    gallery: [
      '/src/assets/images/portfolio_social_1791274381072.jpg',
      '/src/assets/images/blog_cover_1791274392023.jpg'
    ],
    description: 'Strategia di social media management e produzione di contenuti video immersivi per il lancio della nuova collezione primavera/estate.',
    servicesUsed: ['Social Media Management', 'Content Creation', 'Advertising'],
    year: '2026',
    result: '+85.000 follower organici in 4 mesi e tasso di engagement salito al 6.8%.',
    link: 'https://example.com'
  },
  {
    id: 'p3',
    title: 'Nexus Architecture – Web Experience',
    slug: 'nexus-architecture',
    client: 'Nexus Studio',
    category: 'Web Design',
    image: '/src/assets/images/destination_image_1791274400203.jpg',
    gallery: [
      '/src/assets/images/destination_image_1791274400203.jpg',
      '/src/assets/images/hero_marketing_studio_1791274361323.jpg'
    ],
    description: 'Progettazione e sviluppo di un portfolio digitale minimalista e immersivo per uno studio di architettura di fama internazionale.',
    servicesUsed: ['Web Design', 'UX/UI', 'Graphic Design'],
    year: '2025',
    result: 'Premiato come sito del giorno su piattaforme internazionali di design.',
    link: 'https://example.com'
  },
  {
    id: 'p4',
    title: 'Aura Organic Skincare – Global Launch',
    slug: 'aura-skincare',
    client: 'Aura Cosmetics',
    category: 'Marketing',
    image: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    gallery: [
      '/src/assets/images/portfolio_branding_1791274372060.jpg'
    ],
    description: 'Campagna di lancio omnicanale per un brand di cosmetici biologici, combinando influencer marketing e ADV ad alte prestazioni.',
    servicesUsed: ['Marketing Strategy', 'Advertising', 'Product Photography'],
    year: '2026',
    result: 'ROI pari a 4.2x su tutte le campagne Meta e Google attivate.',
    link: 'https://example.com'
  },
  {
    id: 'p5',
    title: 'Kinetic Motion – Corporate Identity',
    slug: 'kinetic-motion',
    client: 'Kinetic Tech',
    category: 'Graphic Design',
    image: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
    gallery: [
      '/src/assets/images/hero_marketing_studio_1791274361323.jpg'
    ],
    description: 'Sviluppo di coordinato grafico, motion guidelines e brochure istituzionali per una startup nel settore della mobilità elettrica.',
    servicesUsed: ['Graphic Design', 'Branding'],
    year: '2025',
    result: 'Chiusura fortunata del round di finanziamento Serie A grazie a pitch deck coordinati.',
    link: 'https://example.com'
  },
  {
    id: 'p6',
    title: 'Gastronomia Etoile – Still Life & Social',
    slug: 'gastronomia-etoile',
    client: 'Etoile Gourmet',
    category: 'Photography',
    image: '/src/assets/images/blog_cover_1791274392023.jpg',
    gallery: [
      '/src/assets/images/blog_cover_1791274392023.jpg'
    ],
    description: 'Shooting fotografico di prodotto enogastronomico di alta cucina e gestione social focalizzata sullo storytelling visivo.',
    servicesUsed: ['Product Photography', 'Content Creation', 'Social Media Management'],
    year: '2026',
    result: 'Raddoppio delle prenotazioni online e visibilità su riviste di settore.',
    link: 'https://example.com'
  }
];

export const initialDestinations: Destination[] = [
  {
    id: 'd1',
    name: 'Milano Design District',
    slug: 'milano-design-district',
    category: 'Hub Creativo',
    location: 'Milano, Italia',
    description: 'Il cuore pulsante del design e della comunicazione italiana, sede dei nostri laboratori creativi e dei principali brand partner.',
    image: '/src/assets/images/destination_image_1791274400203.jpg',
    relatedProjects: ['p2', 'p3']
  },
  {
    id: 'd2',
    name: 'Parigi Fashion & Luxury',
    slug: 'parigi-fashion',
    category: 'Mercato Internazionale',
    location: 'Parigi, Francia',
    description: 'Avamposto strategico per la gestione di progetti nel settore del lusso, della moda e dell’ospitalità d’alta gamma.',
    image: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    relatedProjects: ['p1']
  },
  {
    id: 'd3',
    name: 'Zurigo Tech & Finance',
    slug: 'zurigo-tech',
    category: 'Innovazione Finanziaria',
    location: 'Zurigo, Svizzera',
    description: 'Area di riferimento per la consulenza di digital strategy e marketing B2B rivolto a istituzioni finanziarie e tech enterprise.',
    image: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
    relatedProjects: ['p5']
  },
  {
    id: 'd4',
    name: 'Roma Heritage & Culture',
    slug: 'roma-heritage',
    category: 'Comunicazione Istituzionale',
    location: 'Roma, Italia',
    description: 'Punto di contatto per grandi clienti istituzionali, eventi culturali e progetti di valorizzazione del patrimonio storico.',
    image: '/src/assets/images/blog_cover_1791274392023.jpg',
    relatedProjects: ['p4', 'p6']
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Il Futuro del Branding nel 2026: Minimalismo Emozionale e IA',
    subtitle: 'Come i brand di successo stanno combinando identità visiva pulita e personalizzazione algoritmica.',
    slug: 'futuro-branding-2026',
    content: 'Nel panorama digitale odierno, il branding non è più solo questione di un logo accattivante o di una palette cromatica coerente. I marchi più influenti stanno adottando il minimalismo emozionale: una sintesi tra estetica essenziale e messaggi profondamente umani. In questo articolo esploriamo le tendenze chiave che definiscono la comunicazione visiva e strategica del 2026, evidenziando come l’intelligenza artificiale possa supportare la creatività senza sostituire l’intuizione umana.',
    author: 'Jacopo Hill',
    date: '4 Ottobre 2026',
    category: 'Branding',
    tags: ['Branding', 'Design', 'Tendenze 2026'],
    coverImage: '/src/assets/images/blog_cover_1791274392023.jpg',
    status: 'Pubblicato',
    seoTitle: 'Il Futuro del Branding nel 2026 | JH studios',
    metaDescription: 'Scopri le tendenze di branding e design per il 2026. Minimalismo emozionale e strategie digitali per agenzie e brand di lusso.'
  },
  {
    id: 'b2',
    title: 'Social Media Strategy: Come Misurare il VERO Ritorno sull’Investimento',
    subtitle: 'Oltre le vanity metrics: ecco i KPI fondamentali per valutare l’impatto commerciale dei social.',
    slug: 'social-media-roi-kpi',
    content: 'Molte aziende investono budget considerevoli sui social media senza sapere esattamente quale sia il ritorno effettivo. I like, le condivisioni e le impression sono indicatori utili ma insufficienti. Per capire se una strategia social sta realmente funzionando, bisogna analizzare metriche di seconda e terza generazione: tasso di conversione del traffico social, costo di acquisizione cliente (CAC) e valore del ciclo di vita del cliente (LTV).',
    author: 'Sofia Moretti',
    date: '28 Settembre 2026',
    category: 'Social Media',
    tags: ['Social Media', 'Marketing', 'ROI'],
    coverImage: '/src/assets/images/portfolio_social_1791274381072.jpg',
    status: 'Pubblicato',
    seoTitle: 'Social Media ROI: KPI essenziali | JH studios',
    metaDescription: 'Guida pratica alla misurazione del ROI sui social media. Supera le vanity metrics e focalizzati sui risultati di business.'
  },
  {
    id: 'b3',
    title: 'Web Design Minimalista: Perché la Pulizia Visiva Aumenta le Conversioni',
    subtitle: 'Il potere del whitespace e della gerarchia tipografica nei siti web contemporanei.',
    slug: 'web-design-minimalista-conversioni',
    content: 'Quando un utente atterra su un sito web, ha bisogno di comprendere immediatamente la proposta di valore senza essere sopraffatto da stimoli visivi caotici. Il web design contemporaneo privilegia ampi spazi bianchi, tipografia curata nei minimi dettagli e percorsi di navigazione intuitivi. Analizziamo i principi di UX che trasformano i visitatori in clienti fedeli.',
    author: 'Marco De Luca',
    date: '15 Settembre 2026',
    category: 'Web Design',
    tags: ['Web Design', 'UX/UI', 'Conversioni'],
    coverImage: '/src/assets/images/destination_image_1791274400203.jpg',
    status: 'Pubblicato',
    seoTitle: 'Web Design Minimalista e Conversioni | JH studios',
    metaDescription: 'Come il web design pulito e minimalista migliora la user experience e massimizza le conversioni del tuo sito.'
  },
  {
    id: 'b4',
    title: 'Fotografia di Prodotto: L’Arte di Vendere con l’Immagine',
    subtitle: 'I segreti dello still life di lusso per valorizzare e-commerce e cataloghi.',
    slug: 'fotografia-prodotto-still-life',
    content: 'Nel commercio digitale, l’immagine sostituisce il tatto. Il potenziale acquirente non può toccare con mano il prodotto, perciò si affida interamente alla qualità visiva della fotografia. Luce, texture, riflessi e angolazioni giocano un ruolo determinante nella percezione del valore del brand.',
    author: 'Elena Rossi',
    date: '2 Settembre 2026',
    category: 'Photography',
    tags: ['Fotografia', 'Still Life', 'E-commerce'],
    coverImage: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    status: 'Pubblicato',
    seoTitle: 'Fotografia di Prodotto e Still Life | JH studios',
    metaDescription: 'Scopri le tecniche di fotografia di prodotto per e-commerce e cataloghi di successo.'
  },
  {
    id: 'b5',
    title: 'Digital Strategy Omnicanale: Integrare Online e Offline con Successo',
    subtitle: 'Strategie integrate per un’esperienza cliente fluida e senza attriti.',
    slug: 'digital-strategy-omnicanale',
    content: 'Il consumatore moderno non fa distinzione tra canale digitale e punto vendita fisico: si aspetta un’esperienza coerente e fluida. Unire le campagne di digital marketing con le attività in-store richiede una pianificazione strategica rigorosa e l’utilizzo di dati centralizzati.',
    author: 'Jacopo Hill',
    date: '20 Agosto 2026',
    category: 'Marketing',
    tags: ['Digital Strategy', 'Omnicanalità', 'Business'],
    coverImage: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
    status: 'Bozza',
    seoTitle: 'Digital Strategy Omnicanale | JH studios',
    metaDescription: 'Strategie per integrare canali online e offline in un unico ecosistema di comunicazione vincente.'
  },
  {
    id: 'b6',
    title: 'Content Creation: Storytelling Visivo per Brand Autorevoli',
    subtitle: 'Come creare narrazioni memorabili che catturano l’attenzione del pubblico.',
    slug: 'content-creation-storytelling',
    content: 'Le persone non acquistano prodotti, acquistano storie in cui si identificano. Il content marketing basato su uno storytelling autentico e visivamente curato è lo strumento più potente per costruire fiducia e lealtà nel lungo termine.',
    author: 'Sofia Moretti',
    date: '10 Agosto 2026',
    category: 'Content',
    tags: ['Content', 'Storytelling', 'Video'],
    coverImage: '/src/assets/images/blog_cover_1791274392023.jpg',
    status: 'Programmato',
    seoTitle: 'Content Creation e Storytelling | JH studios',
    metaDescription: 'Tecniche avanzate di content creation e storytelling visivo per brand che vogliono distinguersi.'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Alexandre DuPont',
    role: 'Direttore Marketing',
    company: 'Luminaire Paris',
    content: 'JH studios ha completamente rivoluzionato la nostra presenza digitale e l’identità di brand. La loro attenzione ai dettagli e la visione strategica sono state eccezionali.',
    avatar: '/src/assets/images/portfolio_branding_1791274372060.jpg'
  },
  {
    id: 't2',
    name: 'Beatrice Rossi',
    role: 'CEO & Founder',
    company: 'Vogue & Co. Milano',
    content: 'Lavorare con JH studios è un’esperienza stimolante e professionale. Hanno generato un incremento di follower e vendite superiore alle nostre aspettative.',
    avatar: '/src/assets/images/portfolio_social_1791274381072.jpg'
  },
  {
    id: 't3',
    name: 'Federico Neri',
    role: 'Managing Partner',
    company: 'Nexus Studio',
    content: 'Un team di veri professionisti della comunicazione. Il nuovo sito web e la strategia di digital marketing ci hanno aperto le porte ai mercati internazionali.',
    avatar: '/src/assets/images/destination_image_1791274400203.jpg'
  }
];

export const initialTeamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Jacopo Hill',
    role: 'Founder & Creative Director',
    bio: '15 anni di esperienza nel digital marketing, nel design strategico e nella direzione creativa per brand internazionali di lusso.',
    image: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
    socialUrl: 'https://linkedin.com'
  },
  {
    id: 'tm2',
    name: 'Sofia Moretti',
    role: 'Head of Digital Strategy',
    bio: 'Specializzata in performance marketing, funnel di conversione e analisi dati avanzata per e-commerce in forte crescita.',
    image: '/src/assets/images/portfolio_social_1791274381072.jpg',
    socialUrl: 'https://linkedin.com'
  },
  {
    id: 'tm3',
    name: 'Marco De Luca',
    role: 'Lead Web Architect & UX',
    bio: 'Appassionato di minimalismo digitale, performance web e interfacce utente immersive e accessibili.',
    image: '/src/assets/images/destination_image_1791274400203.jpg',
    socialUrl: 'https://linkedin.com'
  },
  {
    id: 'tm4',
    name: 'Elena Rossi',
    role: 'Art Director & Senior Designer',
    bio: 'Cura ogni dettaglio visivo, dal graphic design alla fotografia di prodotto, con un occhio rigoroso per l’estetica contemporanea.',
    image: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    socialUrl: 'https://linkedin.com'
  }
];

export const initialContactRequests: ContactRequest[] = [
  {
    id: 'c1',
    firstName: 'Giovanni',
    lastName: 'Bianchi',
    email: 'g.bianchi@aziendapro.it',
    phone: '+39 333 1234567',
    company: 'Bianchi Design Srl',
    service: 'Branding & Identity',
    budget: '€ 5.000 - € 10.000',
    message: 'Desideriamo rinnovare completamente la nostra brand identity e il sito web istituzionale.',
    date: '05 Ottobre 2026',
    status: 'Nuovo'
  },
  {
    id: 'c2',
    firstName: 'Clara',
    lastName: 'Conti',
    email: 'clara@contifashion.com',
    phone: '+39 349 9876543',
    company: 'Conti Fashion',
    service: 'Social Media Management',
    budget: '€ 2.000 - € 5.000',
    message: 'Cerchiamo un partner strategico per la gestione dei nostri canali Instagram e TikTok.',
    date: '03 Ottobre 2026',
    status: 'In lavorazione'
  }
];

export const initialMediaItems: MediaItem[] = [
  {
    id: 'm1',
    name: 'Hero Studio Cinematic',
    url: '/src/assets/images/hero_marketing_studio_1791274361323.jpg',
    type: 'image',
    size: '1.2 MB',
    altText: 'Studio di marketing creativo',
    date: '01 Ottobre 2026'
  },
  {
    id: 'm2',
    name: 'Branding Mockup Travertine',
    url: '/src/assets/images/portfolio_branding_1791274372060.jpg',
    type: 'image',
    size: '950 KB',
    altText: 'Mockup branding e packaging lusso',
    date: '01 Ottobre 2026'
  },
  {
    id: 'm3',
    name: 'Social Media Setup Studio',
    url: '/src/assets/images/portfolio_social_1791274381072.jpg',
    type: 'image',
    size: '1.1 MB',
    altText: 'Setup creazione contenuti social',
    date: '02 Ottobre 2026'
  },
  {
    id: 'm4',
    name: 'Digital Workspace Desk',
    url: '/src/assets/images/blog_cover_1791274392023.jpg',
    type: 'image',
    size: '890 KB',
    altText: 'Workspace di strategia digitale',
    date: '02 Ottobre 2026'
  },
  {
    id: 'm5',
    name: 'Metropolis Skyline Twilight',
    url: '/src/assets/images/destination_image_1791274400203.jpg',
    type: 'image',
    size: '1.4 MB',
    altText: 'Skyline metropolitano',
    date: '03 Ottobre 2026'
  }
];

export const initialMenuItems: MenuItem[] = [
  { id: 'mi1', label: 'Home', path: 'home', visible: true, order: 1 },
  { id: 'mi2', label: 'Chi siamo', path: 'about', visible: true, order: 2 },
  { id: 'mi3', label: 'Servizi', path: 'services', visible: true, order: 3 },
  { id: 'mi4', label: 'Destinazioni', path: 'destinations', visible: true, order: 4 },
  { id: 'mi5', label: 'Portfolio', path: 'portfolio', visible: true, order: 5 },
  { id: 'mi6', label: 'Blog', path: 'blog', visible: true, order: 6 },
  { id: 'mi7', label: 'Contatti', path: 'contact', visible: true, order: 7 }
];

export const initialThemeSettings: ThemeSettings = {
  primaryColor: '#0c0a09',
  secondaryColor: '#78716c',
  accentColor: '#dc2626',
  backgroundColor: '#fafaf9',
  fontPrimary: 'Plus Jakarta Sans',
  fontDisplay: 'Syne',
  borderRadius: '0.5rem',
  darkMode: false
};

export const initialSEOSettings: SEOSettings = {
  siteTitle: 'JH studios – Agenzia di Marketing, Comunicazione e Digital Strategy',
  siteDescription: 'Agenzia creativa e di marketing specializzata in Digital Strategy, Social Media, Branding, Graphic Design e Web Design.',
  keywords: 'agenzia marketing, digital strategy, social media management, branding, graphic design, web design milano',
  ogImage: '/src/assets/images/hero_marketing_studio_1791274361323.jpg'
};

export const initialSocialSettings: SocialSettings = {
  instagram: 'https://instagram.com/jhstudios',
  facebook: 'https://facebook.com/jhstudios',
  tiktok: 'https://tiktok.com/@jhstudios',
  linkedin: 'https://linkedin.com/company/jh-studios',
  youtube: 'https://youtube.com/@jhstudios',
  x: 'https://x.com/jhstudios'
};

export const initialGeneralSettings: GeneralSettings = {
  agencyName: 'JH studios',
  tagline: 'Trasformiamo idee in strategie che lasciano il segno.',
  email: 'hello@jhstudios.it',
  phone: '+39 02 89012345',
  address: 'Via Tortona 32, 20144 Milano (MI)',
  workingHours: 'Lun - Ven: 09:00 - 19:00'
};
