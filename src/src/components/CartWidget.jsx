import React from 'react'
import './CartWidget.css';

import addToCart from './shoppingCart.ico';

const CartWidget = () => {

    let handlerOnClick = () => {
        
        console.log("contador");
    }

    return (
        <div>
            <li><img src={addToCart} className="addToCart" onClick={handlerOnClick}/></li>
        </div>
    )
}

export default CartWidget
