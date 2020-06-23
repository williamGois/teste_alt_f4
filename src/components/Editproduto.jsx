import "./Addproduto.css";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import back from '../images/back.png';
import { carregaProdutoEdit, nomeDigitado, quantidadeDigitada, editadoFunc, valorDigitado, updateProduto, remove } from "../store/actions/produto";
import SweetAlert from 'sweetalert2-react';

class Editproduto extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.props.carregaProdutoEdit(this.props.id);

    }
    update() {
        this.props.updateProduto(this.props.id, this.props.nome, this.props.quantidade, this.props.valor)
    }
    render() {
        const { nome, quantidade, valor, editado } = this.props;
        return (
            <div className={`Card`}>
                <Link className="bck" to="/" onClick={() => {
                    this.props.remove()
                }}> <img src={back} alt="Logo"/> Back </Link>
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
                    <span className="Title adb" onClick={() => this.update()} >Editar Produto</span>
                </div>
                <SweetAlert
                    show={editado}
                    type="success"
                    title="Editado com sucesso!"
                    onConfirm={() => this.props.editadoFunc(false)}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        id: state.produto.id,
        nome: state.produto.nome,
        quantidade: state.produto.quantidade,
        valor: state.produto.valor,
        editado: state.produto.editado,
    };
}

function mapDispatchToProp(dispatch) {
    return {
        carregaProdutoEdit(value) {
            // action creator -> action
            const action = carregaProdutoEdit(value);
            dispatch(action);
        },
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
        updateProduto(id, nome, quantidade, valor) {
            // action creator -> action
            const action = updateProduto(id, nome, quantidade, valor);
            dispatch(action);
        },
        editadoFunc(value) {
            // action creator -> action
            const action = editadoFunc(value);
            dispatch(action);
        },
        remove() {
            // action creator -> action
            const action = remove();
            dispatch(action);
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Editproduto);
