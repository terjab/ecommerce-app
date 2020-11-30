import React from 'react'

const ProductDetail = ({ match }) => {
  return <h1>Product detail: {match.params.productId}</h1>
}

export { ProductDetail }
