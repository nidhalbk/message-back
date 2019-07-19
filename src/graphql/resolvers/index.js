import createMessage from './mutation';
import Message from './message';

const resolvers = {
  Mutation: {
    createMessage,
  },
  Message,
};

export default resolvers;
