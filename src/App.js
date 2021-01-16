import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import GlobalStyles from './globalStyles'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { Account } from './pages/Account'
import { PrivateRoute } from './components/PrivateRoute'
import { Login } from './pages/Login'
import { getCustomer } from './utils/customer'
import { configureStore } from './store'

const store = configureStore({
  customer: getCustomer(),
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/account" component={Account} />
            <Route path="/:productId" component={ProductDetail} />
          </Switch>
        </>
      </Provider>
    )
  }
}

export default App
