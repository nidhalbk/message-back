import mongoose from 'mongoose';

const { Schema } = mongoose;

const ConversationSchema = new Schema(
  {
    participants: [
      {
        _id: false,
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    name: {
      type: String,
      required: true,
    },
  },
  { collection: 'Conversation', timestamps: true },
);
export default mongoose.model('Conversation', ConversationSchema);
