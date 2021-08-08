const TYPES = {
  Logger: Symbol.for('Logger'),
  Database: Symbol.for('Database'),

  Server: Symbol.for('Server'),
  HTTPController: Symbol.for('HTTPController'),
  HTTPRouter: Symbol.for('HTTPRouter'),

  UserService: Symbol.for('UserService'),
  UserRepository: Symbol.for('UserRepository'),
  HobbyService: Symbol.for('HobbyService'),
  HobbyRepository: Symbol.for('HobbyRepository'),
}

export { TYPES }
