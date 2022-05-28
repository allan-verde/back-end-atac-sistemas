import { Express } from 'express'
import userRouter from './user.route'
import toolRouter from './tool.route'

const registerRouters = (app: Express): void => {
  app.use('/users', userRouter)
  app.use('/tools', toolRouter)
}

export default registerRouters
