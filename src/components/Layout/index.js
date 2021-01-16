import React, { Component } from 'react'
import { Header, HeaderSection, StyledLink, Wrapper } from './styled'
import { connect } from 'react-redux'

class LayoutComponent extends Component {
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
              <StyledLink to="">Log out</StyledLink>
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

const Layout = connect(mapStateToProps)(LayoutComponent)

export default Layout
