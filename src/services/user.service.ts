import { userRepository } from '../repositories'
import * as dotenv from 'dotenv'
import { sign } from 'jsonwebtoken'
import { Request } from 'express'
import { hash } from 'bcrypt'
import { serializedCreateUserSchema } from '../schema'

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

  create = async ({ validated }: Request) => {
    validated.password = await hash(validated.password, 10)
    const user = await userRepository.save(validated)

    return await serializedCreateUserSchema.validate(user, {
      stripUnknown: true
    })
  }
}

export default new UserService()
