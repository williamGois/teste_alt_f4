import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import produtosReducer from './reducers/produto'

const reducers = combineReducers({
    produto: produtosReducer,
})

function storeConfig() {
    return createStore(reducers,
        applyMiddleware(thunk)
    )
}

export default storeConfig