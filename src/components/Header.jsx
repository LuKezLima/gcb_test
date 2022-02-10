import React, {useState} from "react";
import {Link} from 'react-router-dom'
import './Header.css'

import menuHamburguer from '../assets/imagens/hamburguer.png'
import close from '../assets/imagens/icons8-delete-32.png'

export default ()=> {
    const [mobileMenu, setMobileMenu] = useState(true)

    const toggleMenu = () =>{
        setMobileMenu(!mobileMenu)
    }

    return(
      <header className="headerLand">
          <h2>Healthy Food</h2>
          <img onClick={ e => toggleMenu()} src={mobileMenu ? menuHamburguer : close} alt=" icon" />
          <nav id="nav" className={mobileMenu ? 'active' : 'disabled'}>
              <ul>
                  <li><a href="" className="u-hover--sparkle hvr-underline-from-center">Healthy recipes</a></li>
                  <li><a href="" className="u-hover--sparkle hvr-underline-from-center">blog</a></li>
                  <li><a href="" className="u-hover--sparkle hvr-underline-from-center">join</a></li>
                  <li><Link to="/register" className="btn-register"  >register</Link></li>
              </ul>
          </nav>
      </header>
    )
}