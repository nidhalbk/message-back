const createMessage = async (parent, { data }, { db, pubsub }) => {
  const { MessageSchema, ConversationSchema, UserSchema } = db;
  const { body, sender, reciever } = data;
  let conversation = await ConversationSchema.findOne({
    participants: { $all: [{ user: sender }, { user: reciever }] },
  }).exec();
  // console.log(conversation);
  if (!conversation) {
    const u1 = await UserSchema.findById(sender).exec();
    const u2 = await UserSchema.findById(reciever).exec();
    // console.log('user1 >>>>>>>>',sender);
    conversation = new ConversationSchema({
      participants: [{ user: sender }, { user: reciever }],
      name: `${u1.userName}-${u2.userName}`,
    });
    await conversation.save();
  }
  // console.log('conversation>>>>>>>>>>>>>>',conversation.id);

  const message = new MessageSchema({
    body,
    sender,
    reciever,
    conversation: conversation.id,
  });
  message.save();
  pubsub.publish(`conversation ${conversation.name}`, {
    message: {
      mutation: 'CREATED',
      data: message,
    },
  });
  console.log(`conversation ${conversation.name}`);
  return message;
};
export default createMessage;
