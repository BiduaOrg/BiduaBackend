import { Schema } from 'mongoose';

export const BlockManagerSchema = new Schema({
  agencyId: { type: Schema.Types.ObjectId, ref: 'Agency' },
  name: String,
  phone: String,
  email: String,
  state: String,
  district: String,
  block: String,
  assignedLeads: [{ type: Schema.Types.ObjectId, ref: 'Lead' }],
  status: { type: String, default: 'active' },
});
