import './ItemListContainer.css';

import React from 'react'

const ItemListContainer = (props) => {
    return (
        <>
            <div id="contenedor">
                <img className="imag" src={props.bodyPhoto} width={props.ancho}/>
                <p className="marca">{props.marca} </p>
                <p className="modelo">{props.modelo} </p>
                <p className="precio">U$S {props.precio}</p>
            </div>
        </>
    )
}

export default ItemListContainer;
