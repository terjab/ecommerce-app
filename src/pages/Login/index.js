import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import { getCustomerToken } from '../../api/customers/get-customer-token'
import { schema } from './schema'
import { getCustomer } from '../../api/customers/get-customer'
import { logIn } from '../../store/customer/actions'
import { ACCOUNT } from '../../routes'
import Layout from '../../components/Layout'
import { Input } from '../../components/Input'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import Button from '../../components/Button'

class LoginComponent extends Component {
  state = {
    globalError: '',
  }

  values = {
    email: '',
    password: '',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: values.email,
        password: values.password,
      })
      const customer = await getCustomer(ownerId)
      this.props.logIn(customer)
      this.props.history.push(ACCOUNT)
    } catch (error) {
      this.setState({ globalError: error.message })
    }
    setSubmitting(false)
  }

  render() {
    const { globalError } = this.state
    return (
      <Layout>
        <H1 textAlign="center">Log In</H1>
        <Formik
          initialValues={this.values}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {Boolean(globalError) && (
                <GlobalFormError>{globalError}</GlobalFormError>
              )}
              <Input name="email" label="E-mail" type="email" />
              <Input name="password" label="Password" type="password" />
              <Button type="submit" disabled={isSubmitting}>
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

const mapDispatchToProps = {
  logIn,
}

const Login = connect(null, mapDispatchToProps)(LoginComponent)

export { Login }
