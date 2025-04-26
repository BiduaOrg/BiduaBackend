import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Lead {
  @Field(() => ID) _id: string;
  @Field() name: string;
  @Field() email: string;
  @Field() phone: string;
  @Field() division: string;
  @Field() status: string;
  @Field() message: string;
  @Field() createdAt: Date;
  @Field() updatedAt: Date;
}
