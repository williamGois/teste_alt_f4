import {
    NOME,
    QUANTIDADE,
    CARREGA_PRODUTOS,
    VALOR,
    IDPRODUTO,
    CARREGA_PRODUTO_EDIT
} from '../actions/actionTypes'

const initialState = {
    nome: "",
    quantidade: "",
    valor: "",
    id: "",
    produtosAll: [],
    editado: false,
    adicionado: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NOME:
            return {
                ...state,
                nome: action.payload
            }
        case QUANTIDADE:

            return {
                ...state,
                quantidade: action.payload
            }
        case CARREGA_PRODUTOS:
            return {
                ...state,
                produtosAll: action.payload
            }
        case VALOR:
            return {
                ...state,
                valor: action.payload
            }
        case IDPRODUTO:
            return {
                ...state,
                id: action.payload
            }
        case CARREGA_PRODUTO_EDIT:
            return {
                ...state,
                id: action.payload.id,
                nome: action.payload.nome,
                quantidade: action.payload.quantidade,
                valor: action.payload.valor,
            }
        case "editado":
            return {
                ...state,
                editado: action.payload
            }
        case "adicionado":
            return {
                ...state,
                adicionado: action.payload
            }
        default:
            return state
    }
}