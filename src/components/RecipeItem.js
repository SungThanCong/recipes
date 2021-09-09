import React from 'react'
import './RecipeItem.css'

function RecipeItem({name,ingredients,steps,image}) {

    return (
        <div className ="recipe-container">
            <h1 className="dish-name">{name}</h1>
            <div className = "ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    {ingredients.map((value) => <li>{value.quantity +"\t"+ value.name +'\t('+value.type+")"}</li>)}
                </ul>
            </div>
            <div className = "steps">
                <h3>Steps:</h3>
                <ul>{steps.map(value => <li>{value}</li>)} </ul>
            </div>
            <div className="image">
                <img src={image}></img>
            </div>
        </div>
    )
}

export default RecipeItem
