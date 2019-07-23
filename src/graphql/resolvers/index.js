import createMessage, { createUser } from './mutation';
import Message from './message';
import getAllUser, {
  getMessagesForUser,
  getUser,
  getAllConversation,
  getConversation,
} from './query';
import Subscription from './subscription';

const resolvers = {
  Mutation: {
    createMessage,
    createUser,
  },
  Query: {
    getAllUser,
    getMessagesForUser,
    getUser,
    getAllConversation,
    getConversation,
  },
  Subscription,
  Message,
};

export default resolvers;
