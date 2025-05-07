import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  type: String, // 'customer', 'investor', 'partner'
  createdAt: { type: Date, default: Date.now },
});