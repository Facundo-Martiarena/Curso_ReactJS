import React from 'react'
import logo_sn from './logo.png';
import './NavBar.css'
import addToCart from './shoppingCart.ico';


export const NavBar = () => {

    let handlerOnClick = () => {
        
        console.log("contador");
    }

    return (
        <div>
           <ul>
                <img src={logo_sn} className="Header-logo" alt="logo" />
                <li><img src={addToCart} className="addToCart" onClick={handlerOnClick}/></li>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">Noticias</a></li>
                <li><a href="contact.asp">Contacto</a></li>
                <li><a href="about.asp">Nosotros</a></li>
                
            </ul>
        </div>
    )
}

export default NavBar;