import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities/User'

class UserRepository {
  private ormRepo: Repository<User>

  constructor () {
    this.ormRepo = AppDataSource.getRepository(User)
  }

  save = async (user: Partial<User>) => await this.ormRepo.save(user)

  findOne = async (payload: object) => await this.ormRepo.findOneBy({ ...payload })
}

export default new UserRepository()
