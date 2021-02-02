import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as routes from './routes'
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
          <Route
            path={routes.HOMEPAGE}
            exact
            render={() => <Redirect to={routes.PRODUCT_LIST} />}
          />
          <Route path={routes.PRODUCT_LIST} exact component={ProductList} />
          <Route path={routes.PRODUCT_DETAIL} component={ProductDetail} />
          <Route path={routes.CART} component={Cart} />
          <Route path={routes.SIGNUP} component={SignUp} />
          <Route path={routes.LOGIN} component={Login} />
          <PrivateRoute path={routes.ACCOUNT} component={Account} />
        </Switch>
      </>
    </Provider>
  )
}

export { App }
