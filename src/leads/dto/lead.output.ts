// src/leads/dto/lead.output.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LeadOutput {
  @Field() _id: string;
  @Field() name: string;
  @Field() email: string;
  @Field() phone: string;
  @Field() division: string;
  @Field() message: string;
  @Field() status: string;
  @Field() createdAt: Date;
}
