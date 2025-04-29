// src/email/dto/send-email.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SendEmailInput {
  @Field()
  to: string;

  @Field()
  subject: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  html?: string;
}
