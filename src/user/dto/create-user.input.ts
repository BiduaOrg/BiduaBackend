import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  type: string; // 'customer' | 'investor' | 'partner'
}