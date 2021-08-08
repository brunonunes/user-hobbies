import { injectable, inject } from 'inversify'
import { TYPES } from '../../../../types'
import { ResourceNotFound } from '../../../../libs/errors'
import { Hobby, UnmarshalledHobby } from '../../../../domain/hobby'
import { HobbyRepository } from '../../../../domain/repository'
import { MongooseData } from '..'
import { HobbyMapper } from '../mappers/hobby'

@injectable()
export class HobbyMongooseRepository implements HobbyRepository {
  @inject(TYPES.Database) private _database: MongooseData

  async findByUser(id: string): Promise<Hobby[]> {
    const hobbies = await (<Promise<UnmarshalledHobby[]>>(
      this._database.hobbies.find({ user: id })
    ))
    if (!hobbies) {
      throw new ResourceNotFound('Hobby', { user: id })
    }
    return hobbies.map((hobby) => HobbyMapper.toDomain(hobby))
  }

  async getById(id: string): Promise<Hobby> {
    const hobby = await (<Promise<UnmarshalledHobby>>(
      this._database.hobbies.findOne({ id })
    ))
    if (!hobby) {
      throw new ResourceNotFound('Hobby', { id })
    }
    return HobbyMapper.toDomain(hobby)
  }

  async create(hobby: Hobby): Promise<Hobby> {
    const dtoHobby = hobby.unmarshal()
    const created = await (<Promise<UnmarshalledHobby>>(
      this._database.hobbies.create(dtoHobby)
    ))
    return HobbyMapper.toDomain(created)
  }

  async remove(id: string): Promise<void> {
    const deleted = await (<Promise<UnmarshalledHobby>>(
      this._database.hobbies.deleteOne({ _id: id })
    ))
    if (!deleted) {
      throw new ResourceNotFound('Hobby', { id })
    }
    return
  }
}
