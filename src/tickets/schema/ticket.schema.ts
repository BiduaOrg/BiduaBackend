import { Schema } from 'mongoose';

export const TicketSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  status: { type: String, default: 'open' }, // open | in-progress | resolved
  notes: [{
    body: String,
    addedBy: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
});
