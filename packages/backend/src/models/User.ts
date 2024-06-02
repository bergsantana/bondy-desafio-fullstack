import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: { type: String },
  password: { type: String, required: true },
})

//export type UserType = mongoose.InferSchemaType<typeof UserSchema>

export const User = mongoose.model('user', UserSchema)
