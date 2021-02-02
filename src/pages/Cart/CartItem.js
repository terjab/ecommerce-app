import React from 'react'
import { useApi } from '../../api/use-api'
import { getProductById } from '../../api/products/get-product'
import Button from '../../components/Button'

const CartItem = ({ productId, quantity, removeProduct }) => {
  const { data } = useApi(() => getProductById(productId), productId)

  return (
    <li key={productId}>
      {data && (
        <>
          <div>
            {data.name} - {quantity}
          </div>
          <Button onClick={() => removeProduct(productId)}>Remove</Button>
        </>
      )}
    </li>
  )
}

export { CartItem }
