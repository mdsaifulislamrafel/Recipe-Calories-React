import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { CiClock1 } from "react-icons/ci";
import { AiTwotoneFire } from "react-icons/ai";


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
            <div className='grid grid-cols-2 gap-5'>
                {
                    recipe.map(item => {
                        return (
                            <div key={item.id} className='h-[72vh] '>
                                <div className="card card-compact bg-base-100 shadow-xl p-5 border-2">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.description}</p>
                                        <p>Ingredients : {item.ingredients.length}</p>
                                        <ul className='list-disc'>
                                            {
                                                item.ingredients.slice(0, 3).map((pd, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <li>{pd.ingredient_name}, {pd.quantity}</li>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-2 items-center'>
                                                <CiClock1 className='text-2xl' />
                                                <p>{item.preparing_time} minutes</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <AiTwotoneFire  className='text-2xl'/>
                                                <p>{item.calories}</p>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-start">
                                            <button className="btn btn-primary">Want to Cook</button>
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