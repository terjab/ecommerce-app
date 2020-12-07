import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import { Products } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/:productId" component={ProductDetail} />
        </Switch>
      </>
    )
  }
}

export default App
