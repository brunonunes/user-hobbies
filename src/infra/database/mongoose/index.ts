import { injectable } from 'inversify'
import { hobbies } from './models/hobbies'
import { users } from './models/users'
import Mongoose from 'mongoose'

Mongoose.connect(`mongodb://:${process.env.MONGODB_URI}`)

const db = Mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('Connection with database succeeded.'))

export { Mongoose, db }

@injectable()
export class MongooseData {
  public hobbies = hobbies
  public users = users
}
