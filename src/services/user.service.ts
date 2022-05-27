import { User } from '../entities/User'
import { userRepository } from '../repositories'
import * as dotenv from 'dotenv'
import { sign } from 'jsonwebtoken'
import { Request } from 'express'

dotenv.config()

class UserService {
  login = async ({ validated }: Request) => {
    const user = await userRepository.findOne({
      email: validated.email
    })

    if (!user || !(await user.comparePwd(validated.password))) {
      return {
        status: 401,
        message: { message: 'Invalid credentials.' }
      }
    }

    const token: string = sign({ ...user }, (process.env.SECRET_KEY as string), {
      expiresIn: process.env.EXPIRES_IN
    })

    return { status: 200, message: { token } }
  }
}

export default new UserService()
