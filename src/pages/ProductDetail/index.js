import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductById } from '../../api/products/get-product'
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

class Detail extends Component {
  state = {
    product: null,
  }

  componentDidMount() {
    const { productId } = this.props.match.params
    this.fetchProduct(productId)
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props.match.params
    if (prevProps.match.params.productId !== productId) {
      this.fetchProduct(productId)
    }
  }

  fetchProduct = async productId => {
    const product = await getProductById(productId)
    this.setState({ product })
  }

  render() {
    const { product } = this.state
    const { dispatch } = this.props

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
                <Button
                  onClick={() =>
                    dispatch({
                      type: 'cartItems/ADD',
                      payload: product.id,
                    })
                  }
                >
                  Add to Cart
                </Button>
                <Link to="/">Back</Link>
              </DetailsWrapper>
            </>
          )}
        </Wrapper>
      </Layout>
    )
  }
}

export const ProductDetail = connect()(Detail)
