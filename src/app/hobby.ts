import { inject, injectable } from 'inversify'
import { TYPES } from '../types'
import { Hobby } from '../domain/hobby'
import { HobbyRepository } from '../domain/repository'

@injectable()
export class HobbyService {
  @inject(TYPES.HobbyRepository) private repository: HobbyRepository

  public getByUser(id: string): Promise<Hobby[]> {
    return this.repository.findByUser(id)
  }

  public create(hobby: Hobby): Promise<Hobby> {
    return this.repository.create(hobby)
  }

  public async remove(id: string): Promise<void> {
    return this.repository.remove(id)
  }
}
