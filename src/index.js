import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';
import db from './models';

const { UserSchema, MessageSchema } = db;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const test = new UserSchema({
  name: 'nidhal',
  userName: 'NBK',
});

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      console.log(context);
      return 'Hello World!';
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context: db });

mongoose.Promise = global.Promise;

server.listen({ port: 4000 }, () => {
  const url = 'mongodb://localhost:27017/messenger';
  mongoose.connect(url, { useNewUrlParser: true });
  mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
  test.save();
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
