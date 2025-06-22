import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import GameScreen from './components/GameScreen';
import { CategoryType } from './types/Country';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);

  const handleSelectCategory = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      {selectedCategory ? (
        <GameScreen 
          category={selectedCategory} 
          onBackToCategories={handleBackToCategories}
        />
      ) : (
        <CategorySelector onSelectCategory={handleSelectCategory} />
      )}
    </div>
  );
}

export default App;