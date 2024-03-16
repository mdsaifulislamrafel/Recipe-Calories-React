import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Recipes = props => {
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        fetch('feckData.json')
            .then(res => res.json())
            .then(data => {
                setRecipe(data);
            })
    }, [])
    return (
        <div>
            <h1>This {recipe.length}</h1>
            <div className='grid grid-cols-2 gap-5'>
                {
                    recipe.map(item => {
                        return (
                            <div key={item.id}>
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.description}</p>
                                        <p>Ingredients : {item.ingredients.length}</p>
                                        {
                                            item.ingredients.slice(0, 3).map((pd, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p>{pd.ingredient_name}, {pd.quantity}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {

};

export default Recipes;