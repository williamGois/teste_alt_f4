import {
    NOME,
    QUANTIDADE,
    CARREGA_PRODUTOS,
    VALOR,
    IDPRODUTO,
    CARREGA_PRODUTO_EDIT
} from './actionTypes'
import axios from 'axios';

// Action Carrega produtos
export function carregaProduto() {
    return (dispatch) => {
        //Carregamento de dados via api
        return axios.get(`https://desafio-apirest-produtos.herokuapp.com/api/produtos`).then((response) => {
            dispatch({
                type: CARREGA_PRODUTOS,
                payload: response.data
            })
        })
    }
}

// Action Creator
export function carregaEdit(value) {
    console.log(value);
    return {
        type: IDPRODUTO,
        payload: value
    }
}

// Action Creator
export function carregaProdutoEdit(value) {
    return (dispatch) => {
        //Carregamento de dados via api
        return axios.get(`https://desafio-apirest-produtos.herokuapp.com/api/produto/${value}`).then((response) => {
            console.log(response.data);
            dispatch({
                type: CARREGA_PRODUTO_EDIT,
                payload: response.data
            })

        })
    }
}

// Action ATUALIZAR PRODUTO
export function updateProduto(id, nome, quantidade, valor) {
    var v = parseFloat(valor.toFixed(2));
    var data = {
        "id": id,
        "nome": nome,
        "quantidade": quantidade,
        "valor": v
    }
    return (dispatch) => {
        dispatch({
            type: "editado",
            payload: true
        })
        //Carregamento de dados via api
        fetch('https://desafio-apirest-produtos.herokuapp.com/api/produto', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data),
        }).then((responseJson) => {
            console.log(responseJson)
        })
    }
}

// Action Creator ADICIONAR PRODUTO
export function adicionarProduto(id, nome, quantidade, valor) {
    var v = parseFloat(valor.toFixed(2));
    var data = {
        "id": id,
        "nome": nome,
        "quantidade": quantidade,
        "valor": v
    }
    return (dispatch) => {
        dispatch({
            type: "adicionado",
            payload: true
        })

        //POST PARA carreagar produto de dados via api
        fetch('https://desafio-apirest-produtos.herokuapp.com/api/produto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain'
            }, body: JSON.stringify(data),
        }).then((responseJson) => {
            console.log(responseJson)
        })
    }
}



// Action LIMPA DADOS
export function remove() {
    var data = {
        "id": "",
        "nome": "",
        "quantidade": "",
        "valor": ""
    }
    return {
        type: CARREGA_PRODUTO_EDIT,
        payload: data
    }
}

// Action Creator
export function nomeDigitado(value) {
    return {
        type: NOME,
        payload: value
    }
}

// Action Creator
export function quantidadeDigitada(value) {
    return {
        type: QUANTIDADE,
        payload: value
    }
}

// Action Creator
export function editadoFunc(value) {
    return {
        type: "editado",
        payload: value
    }
}

// Action Creator
export function adicionadoFunc(value) {
    return {
        type: "adcionado",
        payload: value
    }
}

// Action Creator
export function valorDigitado(value) {
    return {
        type: VALOR,
        payload: value
    }
}