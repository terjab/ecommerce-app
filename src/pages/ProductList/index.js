import React, { Component } from 'react'

import ProductListComponent from './components/ProductList'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'

import { getProducts } from '../../api/get-products'

class ProductList extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    let products = await getProducts()

    this.setState({
      products
    })
  }

  render() {
    const { products } = this.state

    return (
      <Layout>
        <H1 textAlign="center">E-Commerce app</H1>
        {products && <ProductListComponent products={products} />}
      </Layout>
    )
  }
}

export { ProductList }
