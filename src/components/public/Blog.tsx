import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowRight, Search, Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../../types';

export const Blog: React.FC = () => {
  const { blogPosts, setCurrentView } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const publishedPosts = blogPosts.filter(p => p.status === 'Pubblicato');
  const categories = ['Tutti', ...Array.from(new Set(publishedPosts.map(p => p.category)))];

  const filteredPosts = publishedPosts.filter(p => {
    const matchesCat = selectedCategory === 'Tutti' || p.category === selectedCategory;
    const matchesQuery = searchQuery === '' || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  if (activePost) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <button
          onClick={() => setActivePost(null)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna al Blog</span>
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-600 rounded-md font-semibold">{activePost.category}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {activePost.date}</span>
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {activePost.author}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-stone-900 dark:text-stone-50 leading-[1.1]">
            {activePost.title}
          </h1>

          <p className="text-lg text-stone-600 dark:text-stone-300 italic leading-relaxed">
            {activePost.subtitle}
          </p>
        </div>

        <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-stone-200 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <img src={activePost.coverImage} alt={activePost.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>

        <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 space-y-6 text-base sm:text-lg leading-relaxed">
          <p>{activePost.content}</p>
        </div>

        <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-stone-400 mr-2" />
          {activePost.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg text-xs font-medium text-stone-700 dark:text-stone-300">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Blog & Insights</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-4xl leading-[1.08]">
            Idee, tendenze e riflessioni sul <span className="text-amber-600">marketing digitale.</span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
            Approfondimenti curati dai nostri specialisti su branding, social media, web design e strategie di comunicazione.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/60 dark:bg-stone-900 rounded-xl">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Cerca articoli..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl text-sm text-stone-900 dark:text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-600"
          />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer space-y-4 p-6 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800">
                  <img src={post.coverImage} alt={post.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                    <span className="text-amber-600 font-semibold">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">{post.subtitle}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-500">Autore: {post.author}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition-colors">
                  Leggi <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
