import * as yup from 'yup'

const createUserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required()
})

const serializedCreateUserSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdmin: yup.boolean().required()
})

export { createUserSchema, serializedCreateUserSchema }
