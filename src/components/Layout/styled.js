import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  padding: 2rem;
`

export const Header = styled.header`
  padding: 3rem;
  border-bottom: 0.1rem solid gainsboro;
  display: flex;
  justify-content: space-between;
`

export const HeaderSection = styled.div``

export const StyledLink = styled(NavLink)`
  color: ${theme.color.black};
  margin: 1rem;
  text-decoration: none;
  &:hover {
    color: ${theme.color.red};
  }
`

const activeClassName = 'nav-item-active'

export const StyledNavLink = styled(StyledLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: ${theme.color.red};
  }
`
