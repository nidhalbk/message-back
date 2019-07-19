import mongoose from 'mongoose';

const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    reciever: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { collection: 'Message', timestamps: true },
);
export default mongoose.model('Message', MessageSchema);
