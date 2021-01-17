import React from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'

export const AccountPage = ({ customer }) => {
  console.log('login page')
  return (
    <Layout>
      <h1>Hello, {customer.attributes.metadata.firstName}</h1>
    </Layout>
  )
}

const mapStateToProps = state => ({
  customer: state.customer,
})

const Account = connect(mapStateToProps)(AccountPage)

export { Account }
