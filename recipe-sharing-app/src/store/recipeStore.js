import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Holds the list of recipes
  favorites: [], // Holds the list of user's favorite recipes (by recipe ID)
  recommendations: [], // Holds the list of recommended recipes

  // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId] // Add recipe ID to favorites
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId) // Remove recipe ID from favorites
  })),

  // Generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Example logic for generating recommendations based on favorite recipes
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Random selection based on favorite recipes
    );
    return { recommendations: recommended };
  }),

  // Set the initial list of recipes (e.g., from an API or database)
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };





