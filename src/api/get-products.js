/* eslint-disable camelcase */
import config from '../config'
import { getToken } from './get-token'

export const getProducts = async () => {
  const access_token = await getToken()
  
  const res = await fetch(`${config.apiUrl}/api/skus?include=prices`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })

  // Products, prices
  const { data, included } = await res.json()

  return data.map(product => ({
    ...product.attributes,
    id: product.id,
    price: included.find(
      price => price.id === product.relationships.prices.data[0].id
    ).attributes,
  }))
}
