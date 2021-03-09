import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as routes from '../../routes'
import { removeCustomer } from '../../utils/customer'
import { removeToken } from '../../utils/token'
import { logOut } from '../../store/customer/actions'

import {
  Header,
  HeaderSection,
  StyledLink,
  Wrapper,
  StyledNavLink,
} from './styled'

class LayoutComponent extends Component {
  handleLogout = () => {
    removeCustomer()
    removeToken()
    this.props.logOut()
    this.props.history.push(routes.HOMEPAGE)
  }

  render() {
    return (
      <>
        <Header>
          <HeaderSection>
            <StyledLink to={routes.HOMEPAGE}>All products</StyledLink>
          </HeaderSection>
          <HeaderSection>
            <StyledNavLink to={routes.CART}>My Cart</StyledNavLink>
            <StyledNavLink to={routes.SIGNUP}>Sign Up</StyledNavLink>
            {this.props.isAutenthicated ? (
              <StyledNavLink to={routes.ACCOUNT}>My account</StyledNavLink>
            ) : (
              ''
            )}
            {this.props.isAutenthicated ? (
              <StyledNavLink onClick={this.handleLogout} to={routes.HOMEPAGE}>
                Log out
              </StyledNavLink>
            ) : (
              <StyledNavLink to={routes.LOGIN}>Log In</StyledNavLink>
            )}
          </HeaderSection>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </>
    )
  }
}

const mapStateToProps = state => ({
  isAutenthicated: Object.keys(state.customer).length !== 0,
})

const mapDispatchToProps = {
  logOut,
}

const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutComponent)

export default withRouter(Layout)
