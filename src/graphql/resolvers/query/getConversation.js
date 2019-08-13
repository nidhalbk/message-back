const { ObjectId } = require('mongoose').Types;

const getConversation = (parent, { user1, user2 }, { db }, info) => {
  return db.MessageSchema.find({
    $or: [
      { sender: new ObjectId(user1), reciever: new ObjectId(user2) },
      { sender: new ObjectId(user2), reciever: new ObjectId(user1) },
    ],
  });
};
export default getConversation;
