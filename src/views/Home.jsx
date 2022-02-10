import React from "react";
import Header from "../components/Header";
import './Home.css'

import mobileImage from '../assets/mobileImagens/homeMobile.svg'


export default ()=> {
    return(
       <section className="home">
           <Header/>
           <img src={mobileImage} alt="" />
           <div className="boxHome">
               <h1>Ready for
Trying a new recipe?</h1>
               <div className="inputRecipe">
                   <input type="text" name="" id="" className="input" placeholder="Search healthy recipes" />
                   <button className="btn"></button>
               </div>
           </div>
       </section>
    )
}