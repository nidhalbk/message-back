const getAllUser= (parent,args,{db},info)=>{
    console.log(db);
    const users = db.UserSchema.find({});
    console.log(users);
    return users;
}
export default getAllUser;