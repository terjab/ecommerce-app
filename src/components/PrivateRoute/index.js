import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRouteComponent = ({
  isAutenthicated,
  component: Component,
  ...rest
}) => {
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

const mapStateToProps = state => ({
  isAutenthicated: Object.keys(state.customer).length !== 0,
})

const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)

export { PrivateRoute }
