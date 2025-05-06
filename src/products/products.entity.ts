// src/products/products.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  _id: string;

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

  @Field()
  stock: number;  // Yeh line add karein

  @Field()
  createdAt: Date;
}
