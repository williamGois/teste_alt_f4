import React from 'react';
import './App.css';

import Editproduto from './components/Editproduto'


function Edit() {
  return (
    <div className="App">
      <h1>Produtos Alt-F4</h1>
      <div className="linha">
        <Editproduto></Editproduto>
      </div>
    </div>
  );
}

export default Edit;
