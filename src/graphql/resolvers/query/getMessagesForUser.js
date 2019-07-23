const getMessagesForUser = (parent, args, { db }, info) => {
  const messages = db.MessageSchema.find({ reciever: args.id });
  return messages;
};
export default getMessagesForUser;
