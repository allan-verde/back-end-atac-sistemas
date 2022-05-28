import { Router } from 'express'
import { userController } from '../controllers'
import { validateSchema } from '../middlewares'
import { createUserSchema, loginUserSchema } from '../schema'

const userRouter = Router()

userRouter.post(
  '/login',
  validateSchema(loginUserSchema),
  userController.login
)

userRouter.post(
  '/register',
  validateSchema(createUserSchema),
  userController.create
)

export default userRouter
