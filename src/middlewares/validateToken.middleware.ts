import { NextFunction, Request, Response } from 'express'
import { GetPublicKeyOrSecret, JwtPayload, Secret, verify, VerifyErrors } from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { User } from '../entities/User'
import { ErrorHandler } from '../errors'

dotenv.config()

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) throw new ErrorHandler(400, 'Missing authorization token')

  return verify(
    (token as string),
    (process.env.SECRET_KEY as Secret | GetPublicKeyOrSecret),
    (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
      if (err) throw new ErrorHandler(401, err.message)

      req.decoded = decoded as User

      return next()
    }
  )
}

export default validateToken
