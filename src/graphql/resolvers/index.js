import createMessage, { createUser } from './mutation';
import Message from './message';
import Conversation from './conversation';
import getAllUser, {
  getMessagesForUser,
  getUser,
  getAllConversation,
  getConversation,
  getMessagesForConversation,
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
    getMessagesForConversation,
  },
  Subscription,
  Message,
  Conversation,
};

export default resolvers;
