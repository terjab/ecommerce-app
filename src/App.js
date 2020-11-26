import React, { Component } from 'react'

import config from './config'

const getToken = () => 
  fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: config.clientId,
      scope: config.scope,
    })
  })
  .then(res => res.json())
  .then(res => res.access_token)

const getSkus = access_token => 
  fetch(`${config.apiUrl}/api/skus`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    }
  })
  .then(res => res.json())

class App extends Component {
  state = {
    isLoading: 'true',
    products: {}
  }

  async componentDidMount() {
    const token = await getToken()
    const products = await getSkus(token)
    this.setState({products, isLoading: false})
  }

  render() {
    const {
      isLoading,
      products: { data },
    } = this.state;

    
    return (
      <div>
        <h1>E-commerce app</h1>
        {isLoading && '...'}
        {!isLoading && (
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <h2>{item.attributes.name}</h2>
                <img src={item.attributes.image_url} height="40" alt={item.attributes.description}></img>
              </li>
              
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App;
