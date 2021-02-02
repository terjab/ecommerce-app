import React from 'react'
import { connect } from 'react-redux'

import { removeProduct as removeProductAction } from '../../store/cart/actions'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { CartItem } from './CartItem'

const CartView = ({ items, removeProduct }) => {
  return (
    <Layout>
      <H1>Your cart</H1>
      <ul>
        {items.map(item => (
          <CartItem
            key={item.product.id}
            productId={item.product.id}
            quantity={item.quantity}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
    </Layout>
  )
}

const mapStateToProps = state => ({
  items: Object.keys(state.cart).map(productId => ({
    quantity: state.cart[productId],
    product: { id: productId },
  })),
})

const mapDispatchToProps = {
  removeProduct: removeProductAction,
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView)

export { Cart }
