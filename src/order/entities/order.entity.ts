import { Schema } from 'mongoose';

export const OrderSchema = new Schema({
  user: {
    name: String,
    email: String,
    phone: String,
  },
  productId: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 },
  amount: Number,
  status: { type: String, default: 'pending' },
  paymentRef: String,
  createdAt: { type: Date, default: Date.now }, // createdAt field
});
