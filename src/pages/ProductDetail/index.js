import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getProductById } from '../../api/products/get-product'
import { useApi } from '../../api/use-api'
import { addProduct as addProductAction } from '../../store/cart/actions'
import { HOMEPAGE } from '../../routes'

import { H1 } from '../../components/Typography'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

const Detail = ({ match, addProduct }) => {
  const { productId } = match.params
  const { data: product } = useApi(() => getProductById(productId), [productId])

  return (
    <Layout>
      <Wrapper>
        {product && (
          <>
            <ImgWrapper>
              <Img src={product.image_url} />
            </ImgWrapper>
            <DetailsWrapper>
              <H1 textAlign="center">{product.name}</H1>
              <Price>{product.price.formatted_amount}</Price>
              <Description>{product.description}</Description>
              <Button onClick={() => addProduct(product.id)}>
                Add to Cart
              </Button>
              <Link to={HOMEPAGE}>Back</Link>
            </DetailsWrapper>
          </>
        )}
      </Wrapper>
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: addProductAction,
}

export const ProductDetail = connect(null, mapDispatchToProps)(Detail)
