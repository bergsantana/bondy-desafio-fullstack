import { GraphQLResolveInfo } from 'graphql'
import { login } from './login'
 
export default {
  login: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) =>{ return login(parent, args, context, info)}
}
