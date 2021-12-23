export default `
  """
  The User type contains all the information about a user.
  """
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    addressOne: String!
    postNumber: Int!
    city: String!
    cellPhone: Int
    email: String!
    createdAt: Date
    updatedAt: Date
  }

  scalar Date

  type Query {
    """
    Get a user by his/her id.
    """
    user( id: ID! ): User
    """
    Get all the users.
    """
    users: [ User ]
    """
    Find a user by his/her name. The query can contain a space between first name and last name.
    """
    findUserByName( name: String! ): User
  }

  type Mutation {
    """
    This mutation add a user to the database.
    """
    createUser( input: UserInput! ): User
  }

  """
  This is used to create a user.
  """
  input UserInput {
    firstName: String!
    lastName: String!
    companyName: String
    addressOne: String!
    postNumber: Int!
    city: String!
    cellPhone: Int
    email: String!
  }
`;
