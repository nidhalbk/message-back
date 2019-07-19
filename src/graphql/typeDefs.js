import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getAllUser: [User!]!
    getCurrentUser: User!
    getMessagesForUser(id: ID): [Message!]!
  }
  type Mutation {
    createMessage(data: createMessageInput): Message!
  }
  type User {
    _id: ID! @Unique
    name: String!
    userName: String! @Unique
    pic: String
  }
  type Message {
    _id: ID! @Unique
    body: tring!
    sender: User!
    reciever: User!
    createdAt: String!
    updatedAt: String
  }
  input createMessageInput {
    body: tring!
    sender: ID!
    reciever: ID!
  }
`;
export default typeDefs;
