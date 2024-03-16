import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Recipes from './Recipes/Recipes'
import RecipesDetails from './RecipesDetails/RecipesDetails'

function App() {
  const [recipes, setRecipe] = useState([]);
  const [Currently, setCurrently] = useState([]);

  const handleRecipe = (recipe) => {
    const isExist = recipes.find(pd => pd.id === recipe.id);
    if (!isExist) {
      setRecipe([...recipes, recipe]);
    } else {
      alert('already exists')
    }
  };

  const handleDelete = (id) => {
    const deleteRecipe = recipes.filter(pd => pd.id !== id.id);
    const cookies = recipes.find(rec => rec.id === id.id);
    if (cookies) {
        const newRes = [...Currently, cookies];
        setCurrently(newRes);
    }
    setRecipe(deleteRecipe);
    
  };

  return (
    <div className='w-[90%] mx-auto my-12'>
      {/* header section start */}
      <Header></Header>
      {/* header section end */}

      {/* Our Recipes section start */}
      <div className='my-10 flex-1 lg:flex lg:justify-between space-y-8 lg:gap-8'>
        {/* all recipes data */}
        <Recipes handleRecipe={handleRecipe}></Recipes>
        {/* single recipe data */}
        <RecipesDetails handleDelete={handleDelete} Currently={Currently} recipes={recipes}></RecipesDetails>
      </div>
      {/* Our Recipes section end */}
    </div>
  )
}

export default App
