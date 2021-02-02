import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'

import Product from './Product'
import { Pagination } from '../../components/Pagination'

import { addProduct as addProductAction } from '../../store/cart/actions'
import { getProducts } from '../../api/products/get-products'
import { useApi } from '../../api/use-api'

import { ProductsWrap } from './styled'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'

// eslint-disable-next-line no-shadow
const Products = ({ location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))

  const { data: res } = useApi(() => getProducts({ page: { number: page } }), [
    page,
  ])

  const handleAddToCart = productId => addProduct(productId)

  return (
    <Layout>
      <H1 textAlign="center">E-Commerce App</H1>
      {res && (
        <>
          <Pagination pages={res.meta.page_count} />
          <ProductsWrap>
            {res.data.map(product => (
              <Product
                key={product.id}
                node={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ProductsWrap>
        </>
      )}
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: addProductAction,
}

const ProductList = connect(null, mapDispatchToProps)(Products)

export { ProductList }
