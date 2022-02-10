import React from "react";
import './Recipes.css'
import RecipeCard from "../components/RecipeCard";

import imgBroccoli from '../assets/imagens/comida_1.svg'
import imgBeef from '../assets/imagens/comida_2.svg'
import imgPotato from '../assets/imagens/comida_3.svg'
import imgCherry from '../assets/imagens/comida_4.svg'



export default ()=> {
    return(
        
       <section className="recipe">
           <h3>Our best Recipes</h3>
           <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           <div className="recipesGroup">
           <RecipeCard title='Broccoli Salad with Bacon' img={imgBroccoli}/>
           <RecipeCard title='Classic Beef Burguers'  img={imgBeef}/>
           <RecipeCard title='Classic Potato Salad'  img={imgPotato}/>
           <RecipeCard title='Cherry Cobbler on the Grill'  img={imgCherry}/>
           </div>
       </section>
    )
}