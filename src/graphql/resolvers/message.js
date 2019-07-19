const Message = {
  sender(parent, args, { db }) {
    return db.UserSchema.find({ _id: parent.sender });
  },
  reciever(parent, args, { db }) {
    return db.UserSchema.find({ _id: parent.reciever });
  },
};
export default Message;
