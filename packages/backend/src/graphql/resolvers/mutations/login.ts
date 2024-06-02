import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'

export const login = async (_parent, args, _context, _info) => {
  await connection()
  const user = await User.findOne({email: args.email})
  const isMatch = 
    user ? 
    await bcrypt.compare(args.password, user.password) : false
  if(isMatch){ 
    return user
  }
   
}
