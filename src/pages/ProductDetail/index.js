import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProduct } from '../../api/get-product'
import { H1 } from '../../components/Typography'
import Layout from '../../components/Layout'
import { AddButton } from '../ProductList/Product/styled'
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

  fetchProduct = async (productId) => {
    const product = await getProduct(productId)
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
                <Img src={product.data.attributes.image_url} />
              </ImgWrapper>
              <DetailsWrapper>
                <H1 textAlign="center">{product.data.attributes.name}</H1>
                <Price>{product.included[0].attributes.formatted_amount}</Price>
                <Description>{product.data.attributes.description}</Description>
                <AddButton
                  onClick={() =>
                    dispatch({
                      type: 'cartItems/ADD',
                      payload: product.data.id,
                    })
                  }
                >
                  Add to Cart
                </AddButton>
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
