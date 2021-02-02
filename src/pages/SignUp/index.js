import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createCustomer } from '../../api/customers/create-customer'
import { getCustomer } from '../../api/customers/get-customer'
import { logIn } from '../../store/customer/actions'
import { ACCOUNT } from '../../routes'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { schema } from './schema'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import Button from '../../components/Button'

class SignUpPage extends Component {
  state = {
    globalError: '',
  }

  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await createCustomer(values)
      const customer = await getCustomer(ownerId)
      this.props.logIn(customer)
      this.props.history.push(ACCOUNT)
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  render() {
    const { globalError } = this.state

    return (
      <Layout>
        <H1 textAlign="center">Sign Up</H1>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {Boolean(globalError) && (
                <GlobalFormError>{globalError}</GlobalFormError>
              )}
              <Input name="firstName" label="First name" />
              <Input name="email" type="email" label="E-mail" />
              <Input name="password" type="password" label="Password" />
              <Input
                name="passwordConfirm"
                type="password"
                label="Password confirm"
              />
              <Button disabled={isSubmitting}>
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
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

const SignUp = connect(null, mapDispatchToProps)(SignUpPage)

export { SignUp }
