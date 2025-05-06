import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateTicketInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  status?: 'open' | 'in-progress' | 'resolved';

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  note?: string; // Yeh sirf service me handle karenge, Ticket entity me directly nahi hai
}
