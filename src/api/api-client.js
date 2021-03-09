import config from '../config'
import { getToken } from '../utils/token'
import { getGuestToken } from './get-guest-token'

export const api = async (url, options) => {
  let token = getToken()

  if (!token) {
    token = await getGuestToken()
  }
  console.log(url)
  const response = await fetch(`${config.apiUrl}${url}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    ...options,
  })

  return response.json()
}
