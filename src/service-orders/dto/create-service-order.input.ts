
import { InputType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@InputType()
export class CreateServiceOrderInput {
  @Field()
  serviceSlug: string;

  @Field(() => GraphQLJSONObject)
  data: any; 

  @Field()
  userEmail: string;

  @Field()
  razorpay_order_id: string;

  @Field()
  razorpay_payment_id: string;

  @Field()
  razorpay_signature: string;
}
