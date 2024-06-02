import gql from 'graphql-tag'
import user from './user' 
 

export default gql`
  type Mutation {
    login(email: String!, password: String!):  User 
}

`
