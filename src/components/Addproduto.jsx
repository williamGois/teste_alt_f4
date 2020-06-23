import "./Addproduto.css";
import React from "react";
import { connect } from "react-redux";
import { nomeDigitado, quantidadeDigitada, valorDigitado, adicionadoFunc, adicionarProduto } from "../store/actions/produto";
import SweetAlert from 'sweetalert2-react';

class Addproduto extends React.Component {
  //Funçao para adicionar produto
  adicionar() {
    //Action para adicionar produto Via Redux
    this.props.adicionarProduto(this.props.id, this.props.nome, this.props.quantidade, this.props.valor)
  }
  render() {
    const { nome, quantidade, valor, adicionado } = this.props;
    return (
      <div className={`Card`}>
        <div className="Content">
          <div className="Addproduto">
            <span>
              <strong>Nome:</strong>
              <input type="text" className="inputNome" value={nome}
                onChange={e => this.props.nomeDigitado(e.target.value)} />
            </span>
            <span>
              <strong>Quantidade:</strong>
              <input type="number" value={quantidade}
                onChange={e => this.props.quantidadeDigitada(+e.target.value)} />
            </span>
            <span>
              <strong>Valor:</strong>
              <input type="number" value={valor}
                onChange={e => this.props.valorDigitado(+e.target.value)} />
            </span>
          </div>
        </div>
        <div className="HeaderAddproduto">
          <span className="Title adb" onClick={() => this.adicionar()}>Adicionar Produto</span>
        </div>
        <SweetAlert
          show={adicionado}
          type="success"
          title="Produto adicionado com sucesso!"
          onConfirm={() => this.props.adicionadoFunc(false)}
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
    adicionado: state.produto.adicionado,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    nomeDigitado(value) {
      // action creator -> action
      const action = nomeDigitado(value);
      dispatch(action);
    },
    quantidadeDigitada(value) {
      // action creator -> action
      const action = quantidadeDigitada(value);
      dispatch(action);
    },
    valorDigitado(value) {
      // action creator -> action
      const action = valorDigitado(value);
      dispatch(action);
    },
    adicionarProduto(id, nome, quantidade, valor) {
      // action creator -> action
      const action = adicionarProduto(id, nome, quantidade, valor);
      dispatch(action);
    },
    adicionadoFunc(value) {
      // action creator -> action
      const action = adicionadoFunc(value);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Addproduto);
