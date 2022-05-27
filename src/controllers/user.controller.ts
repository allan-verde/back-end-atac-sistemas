import { Request, Response } from 'express'
import { userService } from '../services'

class UserController {
  login = async (req: Request, res: Response) => {
    const { status, message } = await userService.login(req)

    return res.status(status).json(message)
  }
}

export default new UserController()
