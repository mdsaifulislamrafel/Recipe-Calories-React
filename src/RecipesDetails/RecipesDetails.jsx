import PropTypes from 'prop-types';

const RecipesDetails = ({ recipes, handleDelete, Currently }) => {
    return (
        <div className='lg:w-4/12'>
            <div className='border-2 p-5'>
                <h2 className='text-2xl text-center font-semibold'>Want to cook : {recipes.length}</h2>

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
                </div>
            </div>

        </div>
    );
};

RecipesDetails.propTypes = {

};

export default RecipesDetails;