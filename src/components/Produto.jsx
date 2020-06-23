import './Produto.css'

import React from "react";
import FlatList from 'flatlist-react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { carregaProduto, carregaEdit } from "../store/actions/produto";


class Produto extends React.Component {
  constructor(props) {
    super(props);
    this.getProdutos = this.getProdutos.bind(this);
    this.props.carregaProduto();
  }

  formatValue(value) {
    let v = parseFloat(value);
    return v.toFixed(2);
  }
  
  getProdutos = (data, idx) => {
    return (
      <Link className="ProdutosList" key={data.id} to="/Edit" onClick={()=>{
        this.props.carregaEdit(data.id)
      } }>
        <div className="Header">
          <span className="Title">{data.nome}</span>
        </div>
        <div className="ContentProduto">
          <div>
            <span>
              <span>Quantidade: <strong>{data.quantidade}</strong> </span>
            </span>
          </div>
        </div>
        <div className="ContentProduto">
          <div>
            <span>
              <span className="nameValor"><strong className="valor">R${this.formatValue(data.valor)}</strong> </span>
            </span>
          </div>
        </div>
      </Link>
    );
  }
  render() {
    const { produtosAll } = this.props;
    console.log(produtosAll);
    return (
      <div className="Produto">
        <FlatList
          list={produtosAll}
          renderItem={this.getProdutos}
          renderWhenEmpty={() => <div className="erro">Não há produtos!</div>}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nome: state.produto.nome,
    quantidade: state.produto.quantidade,
    valor: state.produto.valor,
    produtosAll: state.produto.produtosAll,
    idEdit: state.produto.idEdit,
  };
}


function mapDispatchToProp(dispatch) {
  return {
    carregaProduto() {
      // action creator -> action
      const action = carregaProduto();
      dispatch(action);
    },

    carregaEdit(value) {
      // action creator -> action
      const action = carregaEdit(value);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Produto);
