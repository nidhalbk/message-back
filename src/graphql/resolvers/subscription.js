const { ObjectId } = require('mongoose').Types;

const Subscription = {
  message: {
    subscribe: async (_parent, { receiverId, senderId }, { db, pubsub }, _info) => {
      console.log(receiverId, senderId);
      const conversation = await db.ConversationSchema.find({
        participants: [{ user: ObjectId(receiverId) }, { user: ObjectId(senderId) }],
      });
      console.log(`conversation ${conversation.name}`);
      return pubsub.asyncIterator(`conversation ${conversation.name}`);
    },
  },
};
export default Subscription;
