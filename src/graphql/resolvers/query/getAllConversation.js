const getAllConversation = (parent, args, { db }, info) => {
  return db.ConversationSchema.find({ participants: { user: args.user } });
};
export default getAllConversation;
