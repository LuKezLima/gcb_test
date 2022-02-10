import React from "react";
import './Services.css'

import bgservices from '../assets/imagens/bloco_services.svg'
import bgservicesMobile from '../assets/mobileImagens/serviceMobile.svg'


export default ()=> {
    return(
       <section className="service">
           <img src={bgservices} alt="background" />
           <img src={bgservicesMobile} id="serviceImgMobile" alt="background" />
           <div className="serviceInfo">
               <h2>The best services ready
To serve you</h2>
               <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
               <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
               <button className="btn hvr-rectangle-out">Know more</button>
           </div>
         
       </section>
    )
}