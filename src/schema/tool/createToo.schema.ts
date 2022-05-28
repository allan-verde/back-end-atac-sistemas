import * as yup from 'yup'

const createToolSchema = yup.object().shape({
  title: yup.string().required(),
  link: yup.string().required(),
  description: yup.string().required(),
  tags: yup.array().of(
    yup.string().required()
  )
})

export { createToolSchema }
