import config from '../../config'
import { setToken } from '../../utils/token'

export const getCustomerToken = async ({ username, password }) => {
  const response = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'password',
      username,
      password,
      client_id: config.clientId,
      scope: config.scope,
    }),
  })

  switch (response.status) {
    case 200: {
      const { owner_id, access_token } = await response.json()
      setToken(access_token)
      return { ownerId: owner_id, access_token }
    }
    case 400:
      throw new Error('Email or password are incorrect')
    default:
      throw new Error('Unexpected error')
  }
}
