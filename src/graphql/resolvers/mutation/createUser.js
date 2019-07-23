const createUser = async (parent, { data }, { db }) => {
  let user = await db.UserSchema.findOne({ userName: data.userName }).exec();
  console.log(user);
  if (user) {
    throw new Error('userName exist');
  }
  user = new db.UserSchema({
    name: data.name,
    userName: data.userName,
    pic: data.pic,
  });
  user.save();
  return user;
};
export default createUser;
