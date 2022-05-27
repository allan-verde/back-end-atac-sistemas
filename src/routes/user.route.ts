import { Router } from 'express'
import { userController } from '../controllers'
import validateSchema from '../middlewares/validateSchema.middleware'
import { loginUserSchema } from '../schema'

const userRouter = Router()

userRouter.post(
  '/login',
  validateSchema(loginUserSchema),
  userController.login
)

export default userRouter
