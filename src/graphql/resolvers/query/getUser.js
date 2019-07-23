const getUser = (parent, args, { db }, info) => {
  return db.UserSchema.find({ _id: args.id });
};
export default getUser;
