import React from 'react';
import { Flag, Globe, MapPin } from 'lucide-react';
import { CategoryType, CATEGORIES } from '../utils/countries';

interface CategorySelectorProps {
  onSelectCategory: (category: CategoryType) => void;
}

export default function CategorySelector({ onSelectCategory }: CategorySelectorProps) {
  const categoryEntries = Object.entries(CATEGORIES) as [CategoryType, typeof CATEGORIES[CategoryType]][];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Flag className="w-12 h-12 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold text-white">Flag Master</h1>
          </div>
          <p className="text-xl text-blue-100 mb-2">Test your knowledge of world flags!</p>
          <p className="text-blue-200">Choose a category to begin your geography adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryEntries.map(([key, category]) => (
            <button
              key={key}
              onClick={() => onSelectCategory(key)}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {category.name}
                </h3>
                <div className="flex items-center justify-center text-blue-200 group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Explore {category.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-8 text-blue-200">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <span>200+ Countries</span>
            </div>
            <div className="flex items-center">
              <Flag className="w-5 h-5 mr-2" />
              <span>Multiple Categories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}