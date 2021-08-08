import Router, { RouterContext } from '@koa/router'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../types'
import { HTTPController } from './controller'

@injectable()
export class HTTPRouter {
  @inject(TYPES.HTTPController) private _controller: HTTPController

  get(): Router {
    return new Router()
      .get('/users', (ctx: RouterContext) => this._controller.listUsers(ctx))
      .post('/users', (ctx: RouterContext) => this._controller.createUser(ctx))
      .delete('/users/:userId', (ctx: RouterContext) =>
        this._controller.deleteUser(ctx),
      )
      .get('/users/:userId/hobbies', (ctx: RouterContext) =>
        this._controller.listHobbiesByUser(ctx),
      )
      .post('/users/:userId/hobbies', (ctx: RouterContext) =>
        this._controller.createHobby(ctx),
      )
      .delete('/users/:userId/hobbies/:hobbyId', (ctx: RouterContext) =>
        this._controller.removeHobby(ctx),
      )
  }
}
