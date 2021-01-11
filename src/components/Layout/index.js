import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem;
`

const Header = styled.header`
  padding: 3rem;
  border-bottom: 0.1rem solid gainsboro;
  display: flex;
  justify-content: space-between;
`
const HeaderSection = styled.div``

const StyledLink = styled(Link)`
  margin-right: 1rem;
`

class Layout extends Component {
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
            <StyledLink to="/account">My account</StyledLink>
          </HeaderSection>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </>
    )
  }
}

export default Layout
