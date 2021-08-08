import 'reflect-metadata'

import { Container } from 'inversify'
import { TYPES } from './types'

import { UserRepository, HobbyRepository } from './domain/repository'

import { HTTPController } from './api/http/controller'
import { HTTPRouter } from './api/http/router'
import { Server, IServer } from './api/http/server'

import { UserService } from './app/user'
import { HobbyService } from './app/hobby'

import { Logger } from './infra/logging/pino'
import { MongooseData } from './infra/database/mongoose'
import { UserMongooseRepository } from './infra/database/mongoose/repositories/user'
import { HobbyMongooseRepository } from './infra/database/mongoose/repositories/hobby'

const container = new Container()

container.bind(TYPES.HTTPController).to(HTTPController).inSingletonScope()
container.bind(TYPES.HTTPRouter).to(HTTPRouter).inSingletonScope()
container.bind<IServer>(TYPES.Server).to(Server).inSingletonScope()

container.bind(TYPES.UserService).to(UserService)
container.bind(TYPES.HobbyService).to(HobbyService)

container.bind(TYPES.Logger).to(Logger).inSingletonScope()
container.bind(TYPES.Database).to(MongooseData).inSingletonScope()
container.bind<UserRepository>(TYPES.UserRepository).to(UserMongooseRepository)
container
  .bind<HobbyRepository>(TYPES.HobbyRepository)
  .to(HobbyMongooseRepository)

export { container }
