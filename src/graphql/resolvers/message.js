const Message = {
  sender(parent, args, { db }) {
    return db.UserSchema.findById(parent.sender);
  },
  reciever(parent, args, { db }) {
    return db.UserSchema.findById(parent.reciever);
  },
};
export default Message;
