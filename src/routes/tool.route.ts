import { Router } from 'express'
import { toolController } from '../controllers'
import { validateSchema, validateToken } from '../middlewares'
import { createToolSchema } from '../schema/tool'

const toolRouter = Router()

toolRouter.post(
  '',
  validateToken,
  validateSchema(createToolSchema),
  toolController.create
)

toolRouter.get(
  '',
  validateToken,
  toolController.getAllBy
)

toolRouter.delete(
  '/:id',
  validateToken,
  toolController.deleteOne
)

export default toolRouter
