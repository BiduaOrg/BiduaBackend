import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => ID) // ID type for unique identifier
  _id: string;

  @Field() 
  userName: string;

  @Field() 
  userEmail: string;

  @Field() 
  userPhone: string;

  @Field() 
  productId: string;

  @Field() 
  quantity: number;

  @Field() 
  amount: number;

  @Field() 
  status: string;

  @Field({ nullable: true })
  paymentRef?: string;

  @Field() // Ensure createdAt is part of the GraphQL schema
  createdAt: Date;
}
