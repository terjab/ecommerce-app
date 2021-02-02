import React from 'react'
import { connect } from 'react-redux'
import { addProduct as addProductAction } from '../../store/cart/actions'
import { getProducts } from '../../api/products/get-products'
import { ProductsWrap } from './styled'
import { useApi } from '../../api/use-api'
import Product from './Product'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Pagination } from '../../components/Pagination'

const Products = ({ match, addProduct }) => {
  const { page } = match.params

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
