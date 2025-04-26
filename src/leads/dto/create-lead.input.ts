import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLeadInput {
  @Field() name: string;
  @Field() email: string;
  @Field() phone: string;
  @Field() division: string;
  @Field() message: string;
}
