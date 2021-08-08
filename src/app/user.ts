import { inject, injectable } from 'inversify'
import { TYPES } from '../types'
import { User } from '../domain/user'
import { UserRepository } from '../domain/repository'

@injectable()
export class UserService {
  @inject(TYPES.UserRepository) private repository: UserRepository

  public findAll(): Promise<User[]> {
    return this.repository.findAll()
  }

  public getById(id: string): Promise<User> {
    return this.repository.getById(id)
  }

  public create(user: User): Promise<User> {
    return this.repository.create(user)
  }

  public async remove(userId: string): Promise<void> {
    return this.repository.remove(userId)
  }
}
