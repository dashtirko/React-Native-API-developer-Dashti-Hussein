import {createStore  } from "redux";
import {createAction, createReducer} from 'redux-act'


const initialState = {
    basket: []
}

export const addToBasket = createAction("Adds item to cart", item => item)
export const clearBasket = createAction("Clear cart")

const reducer = createReducer({
    [addToBasket]: (state, item) => ({...state, basket: state.basket.concat(item)}),
    [clearBasket]: (state) => ({...state, basket: []})
})

export default createStore(reducer, initialState)
