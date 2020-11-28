import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'

class App extends Component {
  render() {
    return (
      <div>
        <h1>E-commerce app</h1>
        <Route path="/" exact component={ProductList} />
        <Route path="/:productId" component={ProductDetail} />
      </div>
    )
  }
}

export default App
