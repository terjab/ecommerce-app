import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as routes from '../../routes'
import { removeCustomer } from '../../utils/customer'
import { removeToken } from '../../utils/token'
import { logOut } from '../../store/customer/actions'

import { Header, HeaderSection, StyledLink, Wrapper } from './styled'

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
            <StyledLink to={routes.CART}>My Cart</StyledLink>
            <StyledLink to={routes.SIGNUP}>Sign Up</StyledLink>
            {this.props.isAutenthicated ? (
              <StyledLink to={routes.ACCOUNT}>My account</StyledLink>
            ) : (
              ''
            )}
            {this.props.isAutenthicated ? (
              <StyledLink onClick={this.handleLogout} to={routes.HOMEPAGE}>
                Log out
              </StyledLink>
            ) : (
              <StyledLink to={routes.LOGIN}>Log In</StyledLink>
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
