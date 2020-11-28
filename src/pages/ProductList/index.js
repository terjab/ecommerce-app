import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../api/get-products'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: {},
  }

  async componentDidMount() {
    const products = await getProducts()
    this.setState({ products, isLoading: false })
  }

  render() {
    const {
      isLoading,
      products: { data },
    } = this.state

    return (
      <div>
        {isLoading && '...'}
        {data && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <Link to={`/${item.id}`}>
                  <h2>{item.attributes.name}</h2>
                  <img
                    src={item.attributes.image_url}
                    height="60"
                    alt={item.attributes.description}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export { ProductList }
