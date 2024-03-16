import './App.css'
import Header from './Header/Header'
import Recipes from './Recipes/Recipes'
import RecipesDetails from './RecipesDetails/RecipesDetails'

function App() {


  return (
    <div className='w-[90%] mx-auto my-12'>
      {/* header section start */}
      <Header></Header>
      {/* header section end */}

      {/* Our Recipes section start */}
      <div className='my-10 flex justify-between gap-8'>
          <Recipes></Recipes>
          <RecipesDetails></RecipesDetails>
      </div>
      {/* Our Recipes section end */}
    </div>
  )
}

export default App
