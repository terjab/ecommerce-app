import * as React from 'react'
import Layout from '../../components/Layout'
import { Wrapper, Div } from './styled'

export const NotFound = () => {
  return (
    <Layout>
      <Wrapper>
        <Div>{'404'}</Div>
        <Div>{'|'}</Div>
        <Div>{"This page doesn't exist."}</Div>
      </Wrapper>
    </Layout>
  )
}
