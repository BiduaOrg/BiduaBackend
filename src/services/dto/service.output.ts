import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ServiceOutput {
  @Field() _id: string;
  @Field() title: string;
  @Field() slug: string;
  @Field() description: string;
  @Field() price: number;
  @Field(() => [String]) fields: string[];
  @Field() createdAt: Date;
}
