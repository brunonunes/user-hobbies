import { RouterContext } from '@koa/router'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../types'
import { User } from '../../domain/user'
import { Hobby } from '../../domain/hobby'
import { HobbyService } from '../../app/hobby'
import { UserService } from '../../app/user'
import { validateCreateHobby } from './validation/hobby'
import { validateCreateUser } from './validation/user'

@injectable()
export class HTTPController {
  @inject(TYPES.HobbyService) private _hobbyService: HobbyService
  @inject(TYPES.UserService) private _userService: UserService

  public async listUsers(ctx: RouterContext): Promise<void> {
    const users = await this._userService.findAll()
    ctx.body = users.map((user) => user.unmarshal())
  }

  public async createUser(ctx: RouterContext): Promise<void> {
    console.log('------>')
    const input = validateCreateUser(
      ctx.request.body as Record<string, unknown>,
    )
    const user = User.create(input)
    const created = await this._userService.create(user)

    ctx.body = created.unmarshal()
  }

  public async deleteUser(ctx: RouterContext): Promise<void> {
    const { id } = ctx.params
    const user = await this._userService.remove(id)
    ctx.body = user
  }

  public async listHobbiesByUser(ctx: RouterContext): Promise<void> {
    const { userId } = ctx.params
    const users = await this._hobbyService.getByUser(userId)
    ctx.body = users.map((user) => user.unmarshal())
  }

  public async createHobby(ctx: RouterContext): Promise<void> {
    const { userId } = ctx.params
    const input = validateCreateHobby(
      ctx.request.body as Record<string, unknown>,
    )

    const hobby = Hobby.create({
      ...input,
      user: userId,
    })
    const user = await this._hobbyService.create(hobby)

    ctx.body = user.unmarshal()
  }

  public async removeHobby(ctx: RouterContext): Promise<void> {
    const { hobbyId } = ctx.params
    const user = await this._hobbyService.remove(hobbyId)
    ctx.body = user
  }
}
