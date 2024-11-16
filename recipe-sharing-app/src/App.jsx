import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';  // Correct path to SearchBar
import RecipeList from './components/RecipeList';  // Correct path to RecipeList
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <SearchBar />  {/* Search bar to input search terms */}
        <RecipeList />  {/* List of filtered recipes */}
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Recipe details route */}
      </Routes>
    </Router>
    
  );
};

export default App;
