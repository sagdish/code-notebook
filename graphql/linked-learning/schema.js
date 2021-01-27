import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    age: Int
  }

  type Query {
    getFriend(id: ID): Friend
    getAllFriends: [Friend]
  }

  enum Gender {
    MALE
    FEMALE
    NEUTRAL
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    age: Int
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`)

export default schema;