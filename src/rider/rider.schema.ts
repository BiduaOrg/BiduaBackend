import { Schema } from 'mongoose';

export const RiderSchema = new Schema({
  blockManagerId: { type: Schema.Types.ObjectId, ref: 'BlockManager' },
  name: String,
  phone: String,
  assignedPincode: String,
  status: { type: String, default: 'active' },
});
