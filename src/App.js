import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
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

const App = () => {
  return (
    <Provider store={store}>
      <>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact render={() => <Redirect to="list/1" />} />
          <Route path="/list/:page" exact component={ProductList} />
          <Route path="/detail/:productId" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/account" component={Account} />
        </Switch>
      </>
    </Provider>
  )
}

export { App }
