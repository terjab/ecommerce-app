import React, { Component } from 'react'
import { Formik } from 'formik'

import { schema } from './schema'

import Layout from '../../components/Layout'
import { Input } from '../../components/Input'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import Button from '../../components/Button'

class Login extends Component {
  state = {
    globalError: '',
  }

  values = {
    email: '',
    password: '',
  }

  handleSubmit = (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      console.log(values)
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

export { Login }
