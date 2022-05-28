import { Request, Response } from 'express'
import { toolService } from '../services'

class ToolController {
  create = async (req: Request, res: Response) => {
    const tool = await toolService.create(req)
    return res.status(201).json(tool)
  }

  getAllBy = async (req: Request, res: Response) => {
    const tools = await toolService.getAllBy(req)

    return res.status(200).json({ tools })
  }

  deleteOne = async (req: Request, res: Response) => {
    await toolService.deleteOne(req)
    return res.sendStatus(204)
  }
}

export default new ToolController()
