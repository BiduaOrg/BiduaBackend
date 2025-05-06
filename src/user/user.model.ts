import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  type: string;

  @Field()
  createdAt: Date;
}