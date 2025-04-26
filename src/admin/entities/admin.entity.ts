import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Admin {
  @Field(() => ID) _id: string;
  @Field() email: string;
  @Field() role: string;
}
