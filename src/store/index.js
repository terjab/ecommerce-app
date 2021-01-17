import { createStore, combineReducers } from 'redux'
import products from './products'
import cartItems from './cartItems'
import customer from './customer'

const reducer = combineReducers({
  products,
  cartItems,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(reducer, preloadedState)
