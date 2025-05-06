// src/order/order.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Product } from 'src/products/products.schema';  // Product model ka import

@Schema()
export class Order {
  @Prop({ required: true })
  user: {
    name: string;
    email: string;
    phone: string;
  };

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product', autopopulate: true })
  productId: Product;

  @Prop()
  quantity: number;

  @Prop()
  amount: number;

  @Prop({ default: 'pending' })
  status: string;

  @Prop()
  paymentRef: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);

// Autopopulate plugin
OrderSchema.plugin(require('mongoose-autopopulate'));
