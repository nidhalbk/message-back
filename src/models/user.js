import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    pic: {
      type: String,
    },
  },
  { collection: 'User', timestamps: true },
);
export default mongoose.model('User', UserSchema);
