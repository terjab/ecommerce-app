import * as React from 'react'
import { Link } from 'react-router-dom'
import range from 'ramda/src/range'
import map from 'ramda/src/map'
import { PRODUCT_LIST } from '../../routes'
import { List, ListItem } from './styled'

const renderPaginationItem = num => (
  <ListItem key={num}>
    <Link to={`${PRODUCT_LIST}/?page=${num}`}>{num}</Link>
  </ListItem>
)

const Pagination = ({ pages }) => (
  <List>{map(renderPaginationItem, range(1, pages + 1))}</List>
)

export { Pagination }
