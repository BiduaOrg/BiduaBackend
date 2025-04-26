import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class RegisterAdminOutput {
  @Field(() => ID)
  _id: string;

  @Field()
  email: string;

  @Field()
  role: string;
}
