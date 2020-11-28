import config from '../config'
import { getToken } from './get-token'

export const getProduct = async (id) => {
  const token = await getToken()

  const res = await fetch(`${config.apiUrl}/api/skus/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  const productDetail = await res.json()
  return productDetail
}
