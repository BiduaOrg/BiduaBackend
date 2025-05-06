import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
class UserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;
}

@InputType()
export class CreateOrderInput {
  @Field(() => UserInput)  // Make sure this is UserInput type
  user: UserInput;

  @Field()
  productId: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  amount: number;
}
