import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeProduct } from '../../store/cartItems/actions'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import Button from '../../components/Button'
import { Wrapper } from './styled'

class CartView extends Component {
  render() {
    return (
      <Layout>
        <H1>Your cart</H1>
        <ul>
          {this.props.items.map(item => (
            <li key={item.product.id}>
              <Wrapper>
                {item.product.name} - {item.quantity}
              </Wrapper>
              <Button onClick={() => this.props.removeProduct(item.product.id)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: state.products.find(p => p.id === productId),
  })),
})

const mapDispatchToProps = {
  removeProduct,
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView)

export { Cart }
