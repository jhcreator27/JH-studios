export interface Service {
  id: string;
  title: string;
  slug: string;
  category: 'Strategia' | 'Comunicazione' | 'Design' | 'Visual';
  number: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  features: string[];
  problem?: string;
  solution?: string;
  process?: { step: string; title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  pricePlaceholder?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: 'Branding' | 'Social Media' | 'Graphic Design' | 'Marketing' | 'Web Design' | 'Photography';
  image: string;
  gallery: string[];
  description: string;
  servicesUsed: string[];
  year: string;
  result: string;
  link?: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  category: string;
  location: string;
  description: string;
  image: string;
  relatedProjects: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  coverImage: string;
  status: 'Bozza' | 'Programmato' | 'Pubblicato' | 'Archiviato';
  seoTitle?: string;
  metaDescription?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  visible?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialUrl?: string;
}

export interface ContactRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  date: string;
  status: 'Nuovo' | 'In lavorazione' | 'Contattato' | 'Chiuso';
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video';
  size: string;
  altText?: string;
  date: string;
}

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  visible: boolean;
  order: number;
}

export interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  fontPrimary: string;
  fontDisplay: string;
  borderRadius: string;
  darkMode: boolean;
}

export interface SEOSettings {
  siteTitle: string;
  siteDescription: string;
  keywords: string;
  ogImage: string;
}

export interface SocialSettings {
  instagram: string;
  facebook: string;
  tiktok: string;
  linkedin: string;
  youtube: string;
  x: string;
}

export interface GeneralSettings {
  agencyName: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  workingHours: string;
}
