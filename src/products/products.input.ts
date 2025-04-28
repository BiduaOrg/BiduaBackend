// src/products/products.input.ts
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field()
  price: number;

  @Field(() => [String])
  images: string[];
}

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field()
  id: string;
}
