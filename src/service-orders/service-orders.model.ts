
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import { Document } from 'mongoose';

@ObjectType()
export class ServiceOrder extends Document {
  @Field(() => ID)
//   _id: string; // No need to explicitly declare, as it's handled by Mongoose
  
  @Field()
  serviceSlug: string;

  @Field(() => GraphQLJSONObject)
  data: any; // Storing dynamic JSON data

  @Field()
  userEmail: string;

  @Field()
  razorpay_order_id: string;

  @Field()
  razorpay_payment_id: string;

  @Field()
  razorpay_signature: string;

  @Field()
  status: string;

  @Field(() => [String], { nullable: 'itemsAndList' })
  mediaLinks: string[];

  @Field()
  createdAt: Date;
}


import { Schema } from 'mongoose';

export const ServiceOrderSchema = new Schema({
  serviceSlug: { type: String, required: true },
  data: { type: Schema.Types.Mixed, required: true }, // For dynamic form fields
  userEmail: { type: String, required: true },
  razorpay_order_id: { type: String, required: true },
  razorpay_payment_id: { type: String, required: true },
  razorpay_signature: { type: String, required: true },
  status: { type: String, default: 'pending' }, // pending | verified | failed
  mediaLinks: { type: [String], default: [] }, // Optional, for uploaded video/photo URLs
  createdAt: { type: Date, default: Date.now },
});

