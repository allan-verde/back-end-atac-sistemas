import { Response } from 'express'

type Tmessage = string | Record<string, any>

class ErrorHandler {
  public statusCode: number
  public message: Tmessage

  constructor (statusCode: number, message: Tmessage) {
    this.message = message
    this.statusCode = statusCode
  }
}

const errorHandler = (err: Error, res: Response) => {
  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  console.error(err)

  return res.status(500).json({ message: 'Internal server error.' })
}

export { errorHandler, ErrorHandler }
