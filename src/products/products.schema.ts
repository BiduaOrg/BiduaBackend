// src/products/products.schema.ts
import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  images: [String],
  stockStatus: { type: String, default: 'available' },
  createdAt: { type: Date, default: Date.now },
});
