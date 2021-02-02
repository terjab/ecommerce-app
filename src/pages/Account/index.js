import React from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'

export const AccountPage = ({ customer }) => {
  return (
    <Layout>
      <h1>
        Hi,{' '}
        {customer.attributes.metadata.firstName
          ? customer.attributes.metadata.firstName
          : 'there'}
      </h1>
    </Layout>
  )
}

const mapStateToProps = state => ({
  customer: state.customer,
})

const Account = connect(mapStateToProps)(AccountPage)

export { Account }
