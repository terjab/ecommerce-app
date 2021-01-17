import { api } from '../api-client'
import { setCustomer } from '../../utils/customer'

export const getCustomer = async ownerId => {
  const { data } = await api(`/api/customers/${ownerId}`)
  setCustomer(data)
  return data
}
