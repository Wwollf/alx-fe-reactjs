import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // Array to hold all recipes
  favorites: [],  // Array to hold the favorite recipe IDs
  searchTerm: '',  // The current search term for filtering recipes
  filteredRecipes: [],  // List of recipes that match the search term
  recommendations: [],  // Array to hold recipe recommendations based on favorites

  // Actions for managing search functionality
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    );
    return { filteredRecipes: filtered };
  }),

  // Actions for managing favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Actions for generating recommendations based on favorites
  generateRecommendations: () => set(state => {
    // For simplicity, recommend recipes from favorites, or you could add more logic
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id)
    );
    return { recommendations: recommended };
  }),

  // Initial recipe data and actions for updating recipes (optional)
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  }))
}));

export { useRecipeStore };






