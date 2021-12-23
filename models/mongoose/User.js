import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  addressOne: {
    type: String,
    required: true
  },
  postNumber: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  cellPhone: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'is invalid'],
    index: true,
    unique: true
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => new Date.now()
  },
  updatedAt: {
    type: Date,
    default: () => new Date.now()
  }
},
{
  timestamps: true
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model("User", UserSchema);
