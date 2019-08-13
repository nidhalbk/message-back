const { ObjectId } = require('mongoose').Types;

const getAllConversation = async (parent, args, { db }) => {
  const user = new ObjectId(args.user);
  const convers = await db.ConversationSchema.find({
    participants: { user },
  }).exec();
  return convers;
};
export default getAllConversation;
