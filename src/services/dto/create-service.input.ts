import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {
  @Field() title: string;
  @Field() slug: string;
  @Field() description: string;
  @Field() price: number;
  @Field(() => [String]) fields: string[];
}
