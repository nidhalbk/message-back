const Conversation = {
  participants: (parent, _args, { db }) =>
    parent.participants.map(user => db.UserSchema.findById(user.user)),
};
export default Conversation;
