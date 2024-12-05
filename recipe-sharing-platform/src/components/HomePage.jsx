import { Link } from 'react-router-dom';

// Inside the recipe card map function
<div
  key={recipe.id}
  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
>
  <img
    src={recipe.image}
    alt={recipe.title}
    className="w-full h-40 object-cover rounded-t-lg"
  />
  <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
  <p className="text-gray-600">{recipe.summary}</p>
  <Link
    to={`/recipe/${recipe.id}`}
    className="text-blue-500 hover:underline mt-4 block"
  >
    View Details
  </Link>
</div>



  