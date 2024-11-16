import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Holds the list of recipes
  searchTerm: '', // Holds the search term for filtering recipes
  filteredRecipes: [], // Holds the filtered recipes based on the search term

  // Action to add a new recipe to the list
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe], // Adds a new recipe to the recipes array
  })),

  // Action to set the recipes list (useful when initializing or updating the list)
  setRecipes: (recipes) => set({ recipes }),

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export { useRecipeStore };



