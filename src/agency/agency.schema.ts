import { Schema } from 'mongoose';

export const AgencySchema = new Schema({
  name: String,
  phone: String,
  email: String,
  district: String,
  state: String,
  type: String, // urban / rural
  depositPaid: Boolean,
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now }
});
