import React from 'react'
import { getProduct } from '../../api/get-product'

const ProductDetail = ({ match }) => {
  console.log(getProduct(match.params.productId))
  return <h1>Product detail: {match.params.productId}</h1>
}

export { ProductDetail }
