import { ApolloServer, gql } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions'
import mongoose from 'mongoose';
import db from './models';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs'

const { UserSchema, MessageSchema } = db;
const pubsub = new PubSub();

const user1 = new UserSchema({
  name: 'nidhal',
  userName: 'NBK',
});
const user2 = new UserSchema({
  name: 'nidhal2',
  userName: 'NBK2',
});
const server = new ApolloServer({ typeDefs, resolvers, context:{ db, pubsub} });

mongoose.Promise = global.Promise;

server.listen({ port: 4000 }, () => {
  const url = 'mongodb://localhost:27017/messenger';
  mongoose.connect(url, { useNewUrlParser: true });
  mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
  user1.save();
  user2.save();
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
