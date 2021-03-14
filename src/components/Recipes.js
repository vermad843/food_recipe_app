import React from 'react';

const Recipes = (props) => {
    const {recipes} = props;
    return (
        <div className = "row">
           {
               recipes.map(recipe => (
                   <div className = "col-md-3">
                      <div className = "card">
                         <div className = "card-body">
                             <h4>{recipe.recipe.label}</h4>
                         </div>
                      </div>
                   </div>
               ))
           }
        </div>
    )
}

export default Recipes;

