import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ServiceOrderOutput {
  @Field() _id: string;
  @Field() serviceSlug: string;
  @Field(() => String) data: string;
  @Field() userEmail: string;
  @Field() razorpay_order_id: string;
  @Field() razorpay_payment_id: string;
  @Field() razorpay_signature: string;
  @Field() status: string;
  @Field(() => [String], { nullable: true }) mediaLinks?: string[];
  @Field() createdAt: Date;
}
