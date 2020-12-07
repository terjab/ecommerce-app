import React, { Component } from 'react'
import { getProducts } from '../../api/get-products'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import Product from './Product'
import { ProductsWrap } from './styled'

class Products extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const products = await getProducts()
    this.setState({ products })
  }

  handleAddToCart = (productId, e) => {
    e.preventDefault()
    console.log('handleAddToCart....')
  }

  render() {
    return (
      <Layout>
        <H1 textAlign="center">E-Commerce App</H1>
        <ProductsWrap>
          {this.state.products.map((product) => (
            <Product
              key={product.id}
              node={product}
              onAddToCart={this.handleAddToCart}
            />
          ))}
        </ProductsWrap>
      </Layout>
    )
  }
}

export { Products }
