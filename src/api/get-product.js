import config from '../config'
import { getToken } from './get-token'

// Get product by ID
export const getProduct = async (id) => {
  const token = await getToken()

  const res = await fetch(`${config.apiUrl}/api/skus/${id}?include=prices`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  const { data, included } = await res.json()
  return { data, included }
}
