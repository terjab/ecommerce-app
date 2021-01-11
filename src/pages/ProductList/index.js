import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { addProduct } from '../../store/cartItems/actions'
import { loadProducts } from '../../store/products/actions'
import { getProducts } from '../../api/get-products'
import { ProductsWrap } from './styled'
import Product from './Product'

class Products extends Component {
  async componentDidMount() {
    if (this.props.products.length === 0) {
      const products = await getProducts()
      this.props.loadProducts(products)
    }
  }

  handleAddToCart = (productId, e) => {
    e.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    return (
      <Layout>
        <H1 textAlign="center">E-Commerce App</H1>
        <ProductsWrap>
          {this.props.products.map((product) => (
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

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = {
  loadProducts,
  addProduct,
}

const ProductList = connect(mapStateToProps, mapDispatchToProps)(Products)

export { ProductList }
