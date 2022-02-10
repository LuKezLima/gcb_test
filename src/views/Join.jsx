import React from "react";
import './Join.css'

import joingBg from '../assets/imagens/bloco_final_image.svg'
import joingBgMobile from '../assets/mobileImagens/serviceMobile.svg'


export default ()=> {
    return(
        <>
       <section className="join">
           <img src={joingBgMobile} id='bgMobileJoin' alt="ilustration making a deal" />
            <div className="joinInfo">
            <h3>Join our membership
to get special offer</h3>
            <div className="inputJoin">
                   <input type="text" name="" className="input" placeholder="Enter your email adress" />
                   <button className="btn hvr-rectangle-out">join</button>
               </div>
            </div>
            <img src={joingBg} alt="" />
       </section>
       <footer>
            <p>© Copyrights 2019 Stack. All Rights Reserved</p>.
            <div className="footerInfo">
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
       </footer>
       </>
    )
}