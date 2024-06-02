import gql from "graphql-tag"; 
 
export default gql`
    type User  { 
        name: String! 
        email: String!
        password: String!
        company: String
    }
`