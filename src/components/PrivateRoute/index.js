import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAutenthicated = false

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        if (isAutenthicated) {
          return <Component {...routeProps} />
        }

        return <Redirect to="/signup" />
      }}
    />
  )
}

export { PrivateRoute }
