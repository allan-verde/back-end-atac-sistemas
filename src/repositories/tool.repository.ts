import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Tool } from '../entities/Tool'

interface IToolRepo {
  save: (tool: Partial<Tool>) => Promise<Tool>
}

class ToolRepository implements IToolRepo {
  private ormRepo: Repository<Tool>

  constructor () {
    this.ormRepo = AppDataSource.getRepository(Tool)
  }

  save = async (tool: Partial<Tool>) => {
    return await this.ormRepo.save(tool)
  }

  getAllBy = (payload: object) => this.ormRepo.findBy({ ...payload })

  deleteOne = (payload: object) => this.ormRepo.delete(({ ...payload }))
}

export default new ToolRepository()
