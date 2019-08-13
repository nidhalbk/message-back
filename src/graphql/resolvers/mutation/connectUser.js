const ConnectUser = (parent, { data }, { db }) => {
  const { userSchema } = db;
  const user = userSchema.findOneAndUpdate({ _id: data.id }, { $set: { onLine: data.onLine } });
  return user;
};
export default ConnectUser;
