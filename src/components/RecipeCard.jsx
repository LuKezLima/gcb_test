import React from "react";
import './RecipeCard.css'



export default ({img, title})=> {
    return(
      <div className="recipeItem">
          <img src={img} className="hvr-grow" alt="recipe photo" />
          <div className="recipeInfo">
              <h4>{title}</h4>
              <button className="btn hvr-rectangle-out">See Recipe</button>
          </div>
      </div>
    )
}