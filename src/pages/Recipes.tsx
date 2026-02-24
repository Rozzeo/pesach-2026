import { useState } from 'react';
import { Search, Clock, Users, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { recipes, recipeCategories, categoryLabels, type RecipeCategory, type Recipe } from '../data/recipes';
import { useLanguage } from '../contexts/LanguageContext';

const categoryColors: Record<RecipeCategory, string> = {
  'Seder Plate': 'bg-wine text-white',
  'Soups & Starters': 'bg-blue-700 text-white',
  'Main Dishes': 'bg-herb-green text-white',
  'Side Dishes': 'bg-amber-700 text-white',
  'Desserts': 'bg-gold text-white',
};

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [expanded, setExpanded] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Card Header */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${categoryColors[recipe.category]}`}>
                {recipe.category}
              </span>
              {recipe.kfp && (
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-gold/10 text-gold border border-gold/30 flex items-center gap-1">
                  <Award size={10} />
                  KFP
                </span>
              )}
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-800">{recipe.name[lang]}</h3>
          </div>
        </div>

        <p className="text-sm text-stone-600 leading-relaxed mb-4">{recipe.description[lang]}</p>

        {/* Meta */}
        <div className="flex gap-4 text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {t('recipes.prep')} {recipe.prepTime[lang]}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {t('recipes.cook')} {recipe.cookTime[lang]}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} />
            {t('recipes.serves')} {recipe.servings}
          </span>
        </div>
      </div>

      {/* Expand Button */}
      <button
        onClick={() => setExpanded(e => !e)}
        className="w-full px-5 py-3 bg-parchment border-t border-sand flex items-center justify-between text-sm font-semibold text-wine hover:bg-sand transition-colors"
      >
        <span>{expanded ? t('recipes.hideRecipe') : t('recipes.viewRecipe')}</span>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="p-5 border-t border-sand bg-stone-50">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ingredients */}
            <div>
              <h4 className="font-bold text-wine mb-3 text-sm uppercase tracking-wide">{t('recipes.ingredients')}</h4>
              <ul className="space-y-1.5">
                {recipe.ingredients.map((ing, i) => (
                  <li
                    key={i}
                    className={`text-sm leading-snug ${ing[lang].startsWith('—') ? 'font-bold text-stone-700 pt-2 text-xs uppercase tracking-wide' : 'text-stone-700 flex items-start gap-2'}`}
                  >
                    {!ing[lang].startsWith('—') && <span className="text-gold mt-1 flex-shrink-0">•</span>}
                    {ing[lang]}
                  </li>
                ))}
              </ul>
            </div>

            {/* Method */}
            <div>
              <h4 className="font-bold text-wine mb-3 text-sm uppercase tracking-wide">{t('recipes.method')}</h4>
              <ol className="space-y-3">
                {recipe.method.map((step, i) => (
                  <li key={i} className="text-sm text-stone-700 leading-relaxed flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-wine text-white rounded-full text-xs flex items-center justify-center font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step[lang]}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {recipe.tips && (
            <div className="mt-5 bg-gold/10 border border-gold/30 rounded-xl px-4 py-3">
              <span className="text-xs font-bold text-gold uppercase tracking-wide">{t('recipes.tipLabel')} </span>
              <span className="text-sm text-stone-700">{recipe.tips[lang]}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Recipes() {
  const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { t, lang } = useLanguage();

  const filtered = recipes.filter(r => {
    const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
    const matchesSearch = r.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-wine mb-2">{t('recipes.heading')}</h2>
        <p className="text-stone-600">{recipes.length} {t('recipes.subtitle')}</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
        <input
          type="text"
          placeholder={t('recipes.searchPlaceholder')}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wine/30 bg-white"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'All'
              ? 'bg-wine text-white'
              : 'bg-white text-stone-600 border border-stone-300 hover:border-wine hover:text-wine'
          }`}
        >
          {t('recipes.all')} ({recipes.length})
        </button>
        {recipeCategories.map(cat => {
          const count = recipes.filter(r => r.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? `${categoryColors[cat]}`
                  : 'bg-white text-stone-600 border border-stone-300 hover:border-wine hover:text-wine'
              }`}
            >
              {categoryLabels[cat][lang]} ({count})
            </button>
          );
        })}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-stone-500">
          <p className="text-lg mb-2">{t('recipes.noResults')}</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="text-wine hover:underline text-sm"
          >
            {t('recipes.clearFilters')}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {recipeCategories.map(cat => {
            const catRecipes = filtered.filter(r => r.category === cat);
            if (catRecipes.length === 0) return null;
            return (
              <div key={cat}>
                {activeCategory === 'All' && (
                  <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-3 mt-6">{categoryLabels[cat][lang]}</h3>
                )}
                <div className="space-y-4">
                  {catRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
