import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { productsListReducer, productDetailsReducer } from './reducer/productReducers';
import {cartReducer} from './reducer/cartReducers'



const initialState={};
const reducer= combineReducers({
    productList: productsListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)) );

export default store;