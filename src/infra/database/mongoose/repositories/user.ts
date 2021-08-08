import { injectable, inject } from 'inversify'
import { TYPES } from '../../../../types'
import { ResourceNotFound } from '../../../../libs/errors'
import { User, UnmarshalledUser } from '../../../../domain/user'
import { UserRepository } from '../../../../domain/repository'
import { MongooseData } from '..'
import { UserMapper } from '../mappers/user'

@injectable()
export class UserMongooseRepository implements UserRepository {
  @inject(TYPES.Database) private _database: MongooseData

  async findAll(): Promise<User[]> {
    const users = await (<Promise<UnmarshalledUser[]>>(
      this._database.users.find()
    ))
    return users.map((user) => UserMapper.toDomain(user))
  }

  async getById(id: string): Promise<User> {
    const user = await (<Promise<UnmarshalledUser>>(
      this._database.users.findOne({ id })
    ))
    if (!user) {
      throw new ResourceNotFound('User', { id })
    }
    return UserMapper.toDomain(user)
  }

  async create(user: User): Promise<User> {
    const dtoUser = user.unmarshal()
    const created = await (<Promise<UnmarshalledUser>>(
      this._database.users.create(dtoUser)
    ))
    return UserMapper.toDomain(created)
  }

  async update(user: User): Promise<User> {
    const dtoUser = user.unmarshal()
    const updated = await (<Promise<UnmarshalledUser>>(
      this._database.users.updateOne({ id: user.id }, dtoUser)
    ))
    return UserMapper.toDomain(updated)
  }

  async remove(id: string): Promise<void> {
    const updated = await (<Promise<UnmarshalledUser>>(
      this._database.users.remove({ id })
    ))
    if (!updated) {
      throw new ResourceNotFound('User', { id })
    }
    return
  }
}
