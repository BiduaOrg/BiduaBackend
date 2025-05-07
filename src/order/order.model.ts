import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Product } from 'src/products/products.entity';  // Product ko import karna
// UserDetails ko neeche import karna hoga, taaki Order class ke andar reference ho sake

@ObjectType()
export class UserDetails { // Yeh class Order ke baad honi chahiye
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;
}

@ObjectType()
export class Order {
  @Field(() => ID)
  id: string;

  @Field(() => UserDetails)  // Ab yeh properly work karega
  user: UserDetails;

  @Field(() => Product, { nullable: true }) // 👈 Add nullable: true
  productId: Product;
  

  @Field()
  quantity: number;

  @Field()
  amount: number;

  @Field()
  status: string;

  @Field()
  createdAt: Date;
}
