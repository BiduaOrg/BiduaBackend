// // src/leads/dto/update-lead.input.ts
// import { Field, InputType, PartialType } from '@nestjs/graphql';
// import { LeadOutput } from './lead.output';

// @InputType()
// export class UpdateLeadInput extends PartialType(LeadOutput) {
//   @Field({ nullable: true }) status?: string;
//   @Field({ nullable: true }) message?: string;
// }

// src/leads/dto/update-lead.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLeadInput {
  @Field({ nullable: true }) name?: string;

  @Field({ nullable: true }) email?: string;

  @Field({ nullable: true }) phone?: string;

  @Field({ nullable: true }) division?: string;

  @Field({ nullable: true }) message?: string;

  @Field({ nullable: true }) status?: string;
}
