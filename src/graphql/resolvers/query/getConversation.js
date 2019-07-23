const getConversation = (parent, { user1, user2 }, { db }, info) => {
  return db.ConversationSchema.find({
    participants: { $all: [{ user: user1 }, { user: user2 }] },
  });
};
export default getConversation;
