// src/email/email.resolver.ts
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { EmailService } from './email.service';
import { SendEmailInput } from './dto/send-email.input';

@Resolver()
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation(() => Boolean)
  async sendEmail(
    @Args('sendEmailInput') sendEmailInput: SendEmailInput,
  ): Promise<boolean> {
    return this.emailService.sendEmail(sendEmailInput);
  }
}
