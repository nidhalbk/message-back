const { ObjectId } = require('mongoose').Types;

const getMessagesForConversation = (parent, args, { db }, info) => {
  const messages = db.MessageSchema.find({ conversation: new ObjectId(args.id) });
  return messages;
};
export default getMessagesForConversation;
