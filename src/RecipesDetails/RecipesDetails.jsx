import PropTypes from 'prop-types';

const RecipesDetails = ({ recipes, handleDelete, Currently }) => {
  const times = Currently.reduce((p, c) => p + parseFloat(c.preparing_time), 0);
  const calories = Currently.reduce((p, c) => p + parseFloat(c.calories), 0);
  return (
    <div className='lg:w-4/12'>
      <div className='border-2 p-5'>

        {/* Want to cook start */}
        <h2 className='text-2xl text-center font-semibold'>Want to cook : {recipes.length}</h2>
        <div>
          <table className="table-auto lg:table">
            <div>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
            </div>
            <div>
              <tbody>
                {
                  recipes.map((recipe, index) => {
                    return (
                      <tr key={index}>
                        <div className='bg-gray-400 mb-5 rounded-xl'>
                          <td>{index + 1}</td>
                          <td>{recipe.name}</td>
                          <td>{recipe.preparing_time}</td>
                          <td>{recipe.calories}</td>
                          <td><button className='btn btn-success rounded-full' onClick={() => handleDelete(recipe)}>Preparing</button></td>
                        </div>
                      </tr>
                    )
                  })
                }
              </tbody>
            </div>
          </table>
        </div>
        {/* Want to cook end */}

        {/* Currently cooking start */}
        <div>
          <h2 className='text-2xl text-center font-semibold'>Currently cooking: {Currently.length}</h2>
          <div>
            <table className="table-auto table">
              <div>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
              </div>
              <div>
                <tbody>
                  {
                    Currently.map((recipe, index) => {
                      return (
                        <tr key={index}>
                          <div className='bg-gray-400 mb-5 rounded-xl'>
                            <td>{index + 1}</td>
                            <td>{recipe.name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                          </div>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </div>
            </table>
          </div>

          <div className='flex justify-around font-bold text-sm'>
            <p>Total Time = <br /> {times} minutes</p>
            <p>Total Calories = <br />{calories} calories</p>
          </div>
        </div>
        {/* Currently cooking end */}
      </div>

    </div>
  );
};

RecipesDetails.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  Currently: PropTypes.array.isRequired
};

export default RecipesDetails;