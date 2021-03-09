import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../../common/theme'

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: 0;
  text-align: center;
  width: 100%;
`

export const ListItem = styled.li`
  margin: 5px;
`

export const StyledLink = styled(Link)`
  &:hover {
    color: ${theme.color.red};
  }
  text-decoration: none;
  color: black;
`
