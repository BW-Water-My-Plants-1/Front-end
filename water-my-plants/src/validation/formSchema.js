import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must be at least 3 characters long')
      .required('Username is Required'),
    email: yup
      .string()
      .email('Must be a valid email address')
      .required('Must include email address'),
    phone: yup
      .number(),
    plants: yup
      .string()
      .notRequired()
  })
  
  export default formSchema
  