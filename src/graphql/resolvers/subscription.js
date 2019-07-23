const Subscription = {
  message: {
    subscribe(_parent, { receiverId, senderId }, { db, pubsub }, _info) {
      const conversation = db.ConversationSchema.find({
        participants: { $all: [{ user: receiverId }, { user: senderId }] },
      });
      return pubsub.asyncIterator(`conversation ${conversation.name}`);
    },
  },
};
export default Subscription;
