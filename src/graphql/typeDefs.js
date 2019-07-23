import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getAllConversation(user: ID): [Conversation!]!
    getConversation(user1: ID!, user2: ID!): Conversation!
    getAllUser: [User!]!
    getUser(id: ID!): User!
    getMessagesForUser(id: ID!): [Message!]!
  }
  type Mutation {
    createMessage(data: createMessageInput!): Message!
    createUser(data: createUserInput!): User!
  }
  type Subscription {
    message(recieverId: ID!, senderId: ID!): MessageSubscriptionPayload!
  }
  type User {
    _id: ID!
    name: String!
    userName: String!
    pic: String
    createdAt: String
    updatedAt: String
  }
  type Conversation {
    name: String!
    participants: [User!]!
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
  input createUserInput {
    name: String!
    userName: String!
    pic: String
  }
  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }
  type MessageSubscriptionPayload {
    mutation: MutationType!
    data: Message!
  }
`;
export default typeDefs;
