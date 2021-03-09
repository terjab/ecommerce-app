import { createStore, combineReducers } from 'redux'
import cart from './cart'
import customer from './customer'

const reducer = combineReducers({
  cart,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
