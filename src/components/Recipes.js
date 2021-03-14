import React from 'react';

const Recipes = (props) => {
    const {recipes} = props;
    return (
        <div className = "row">
           {
               recipes.map(recipe => (
                   <div className = "col-md-3 p-5">
                      <div className = "card py-2 text-center">
                         <img 
                           src = {recipe.recipe.image}
                           className = "img-fluid w-100 mx-auto rounded-circle"    
                           />
                         <div className = "card-body">
                             <h5>{recipe.recipe.label}</h5>
                         </div>
                         <ul className = "list-group list-group-flush">
                              {
                                  recipe.recipe.ingredientLines.map(ingredient => (
                                     <li className = "list-group-item">{ingredient}</li>
                                  ))}
                         </ul>
                      </div>
                   </div>
               ))
           }
        </div>
    )
}

export default Recipes;

