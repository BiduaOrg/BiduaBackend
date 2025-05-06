import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/create-order.input';
import { Order } from './order.model';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrderService) {}

  @Mutation(() => Order)
  async createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ): Promise<Order> {
    return this.ordersService.create(createOrderInput);
  }

  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Query(() => Order, { nullable: true })
  async order(@Args('id') id: string): Promise<Order | null> {
    return this.ordersService.findOne(id);
  }
}
