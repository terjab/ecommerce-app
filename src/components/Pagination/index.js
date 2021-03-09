import * as React from 'react'
import range from 'ramda/src/range'
import map from 'ramda/src/map'
import { PRODUCT_LIST } from '../../routes'
import { List, ListItem, StyledLink } from './styled'

const renderPaginationItem = num => (
  <ListItem key={num}>
    <StyledLink to={`${PRODUCT_LIST}/?page=${num}`}>{num}</StyledLink>
  </ListItem>
)

const Pagination = ({ pages }) => (
  <List>{map(renderPaginationItem, range(1, pages + 1))}</List>
)

export { Pagination }
