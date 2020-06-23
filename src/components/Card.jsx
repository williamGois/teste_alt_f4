import React from 'react';
import '../App.css';
import Addproduto from './Addproduto'
import Produto from './Produto';

function Card() {
    return (
        <div className="App">
            <h1>Produtos Alt-F4</h1>
            <div className="linha">
                <Addproduto></Addproduto>
            </div>
            <div className="linha">
                <Produto></Produto>
            </div>
        </div>
    );
}

export default Card;
