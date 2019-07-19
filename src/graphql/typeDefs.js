import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getAllUser: [User!]!
    getUser(id: ID!): User!
    getMessagesForUser(id: ID!): [Message!]!
  }
  type Mutation {
    createMessage(data: createMessageInput): Message!
  }
  type User {
    _id: ID!
    name: String!
    userName: String! 
    pic: String
  }
  type Message {
    _id: ID!
    body: String!
    sender: User!
    reciever: User!
    createdAt: String
    updatedAt: String
  }
  input createMessageInput {
    body: String!
    sender: ID!
    reciever: ID!
  }
`;
export default typeDefs;
