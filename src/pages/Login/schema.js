import { object, string } from 'yup'

export const schema = object().shape({
  email: string()
    .email('E-mail is not valid')
    .required('E-mail is required'),
  password: string().required('Password is required'),
})
