import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.Promise = global.Promise;

server.listen({ port: 4000 }, () => {
  const url = 'mongodb://localhost:27017/graphqldb';

  mongoose.connect(url, { useNewUrlParser: true });
  mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
