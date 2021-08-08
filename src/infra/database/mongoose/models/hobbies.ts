import Mongoose from 'mongoose'

const Schema = Mongoose.Schema

const HobbySchema = new Schema({
  passionLevel: { type: Number, required: true },
  name: { type: String, required: true },
  year: { type: Number, required: true },
  user: { type: 'ObjectId', ref: 'User' },
})

const hobbies = Mongoose.model('hobbies', HobbySchema)

export { hobbies }
