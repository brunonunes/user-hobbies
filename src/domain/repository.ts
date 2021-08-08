import { User } from './user'
import { Hobby } from './hobby'

export interface UserRepository {
  findAll(): Promise<User[]>
  getById(id: string): Promise<User>
  create(user: User): Promise<User>
  update(user: User): Promise<User>
  remove(id: string): Promise<void>
}

export interface HobbyRepository {
  findByUser(id: string): Promise<Hobby[]>
  create(hobby: Hobby): Promise<Hobby>
  remove(id: string): Promise<void>
}
