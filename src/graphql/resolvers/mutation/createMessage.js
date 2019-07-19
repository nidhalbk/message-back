const createMessage = (parent, { data }, { db }) => {
  const { MessageSchema } = db;
  const { body, sender, reciever } = data;
  const message = new MessageSchema({
    body,
    sender,
    reciever,
  });
  message.save();
  return message;
};
export default createMessage;
