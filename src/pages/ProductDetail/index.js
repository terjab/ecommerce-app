import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { H1 } from '../../components/Typography'
import { getProduct } from '../../api/get-product'
import Layout from '../../components/Layout'
import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

class ProductDetail extends Component {
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
                <Link to="/">Back</Link>
              </DetailsWrapper>
            </>
          )}
        </Wrapper>
      </Layout>
    )
  }
}

export { ProductDetail }
