export const LOGIN = 'customer/LOGIN'
export const LOGOUT = 'customer/LOGOUT'

export const logIn = customer => ({
  type: LOGIN,
  payload: { customer },
})

export const logOut = () => ({
  type: LOGOUT,
})
