
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ServiceOrdersService } from './service-orders.service';
// import { CreateServiceOrderInput } from './service-orders.input';
import { ServiceOrder } from './service-orders.model';
import { CreateServiceOrderInput } from './dto/create-service-order.input';

@Resolver(() => ServiceOrder)
export class ServiceOrdersResolver {
  constructor(private readonly serviceOrdersService: ServiceOrdersService) {}

  @Mutation(() => ServiceOrder)
  async createServiceOrder(
    @Args('input') input: CreateServiceOrderInput,
  ): Promise<ServiceOrder> {
    return this.serviceOrdersService.create(input);
  }

  @Query(() => [ServiceOrder])
  async getAllServiceOrders(): Promise<ServiceOrder[]> {
    return this.serviceOrdersService.getAllServiceOrders();
  }

  
}
