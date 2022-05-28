import { Request } from 'express'
import { Tool } from '../entities/Tool'
import { ErrorHandler } from '../errors'
import { toolRepository, userRepository } from '../repositories'
import { serializeToolUtils } from '../utils'
import validator from 'validator'

class ToolService {
  create = async ({ validated, decoded }: Request) => {
    const user = (await userRepository.findOne({
      id: decoded.id
    }))!

    const tool: Tool = await toolRepository.save({
      ...validated as Tool,
      user
    })

    return serializeToolUtils(tool)
  }

  getAllBy = async ({ decoded, query }: Request) => {
    const foundUser = await userRepository.findOne({
      id: decoded.id
    })

    if (!foundUser) throw new ErrorHandler(404, 'User not found')

    const { comparePwd, ...user } = foundUser

    let tools = await toolRepository.getAllBy({
      user
    })

    if ('title' in query) {
      tools = tools.filter(tool => {
        return tool.title.toLocaleLowerCase() === (query!.title as string).toLocaleLowerCase()
      })
    }

    if ('tag' in query) {
      tools = tools.filter(tool => {
        return tool.title.toLocaleLowerCase() === (query!.tag as string).toLocaleLowerCase()
      })
    }

    return tools.map(t => serializeToolUtils(t))
  }

  deleteOne = async ({ params }: Request) => {
    if (!validator.isUUID(params.id)) {
      throw new ErrorHandler(400, 'parameter does not resemble a Uuid')
    }

    const tools = await toolRepository.deleteOne({
      id: params.id
    })
    console.log(tools)

    if (tools.affected === 0) throw new ErrorHandler(404, 'Tool not found')
  }
}

export default new ToolService()
