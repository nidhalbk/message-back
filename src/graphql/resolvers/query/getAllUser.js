// import useragent from 'express-useragent';

const getAllUser = (parent, args, { db, req }, info) => {
  // console.log(db);
  const users = db.UserSchema.find({});
  // const source = req.headers['user-agent'];
  // console.log(useragent.parse(source));
  return users;
};
export default getAllUser;
