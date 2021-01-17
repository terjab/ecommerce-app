import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { removeCustomer } from '../../utils/customer'
import { removeToken } from '../../utils/token'
import { logOut } from '../../store/customer/actions'

import { Header, HeaderSection, StyledLink, Wrapper } from './styled'

class LayoutComponent extends Component {
  handleLogout = () => {
    removeCustomer()
    removeToken()
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <Header>
          <HeaderSection>
            <StyledLink to="/">All products</StyledLink>
          </HeaderSection>
          <HeaderSection>
            <StyledLink to="/cart">My Cart</StyledLink>
            <StyledLink to="/signup">Sign Up</StyledLink>
            {this.props.isAutenthicated ? (
              <StyledLink to="/account">My account</StyledLink>
            ) : (
              ''
            )}
            {this.props.isAutenthicated ? (
              <StyledLink onClick={this.handleLogout} to="/">
                Log out
              </StyledLink>
            ) : (
              <StyledLink to="/login">Log In</StyledLink>
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
