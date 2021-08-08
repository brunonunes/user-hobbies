import Mongoose from 'mongoose'

const Schema = Mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, required: true },
})

const users = Mongoose.model('user', UserSchema)

export { users }
