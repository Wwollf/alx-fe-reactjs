import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // This is where all the recipes will be stored
  searchTerm: '',  // This will hold the search term input by the user
  setSearchTerm: (term) => set({ searchTerm: term }),  // Action to set the search term
  filteredRecipes: [],  // This will hold the recipes filtered based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),  // Action to filter recipes based on the search term

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));


