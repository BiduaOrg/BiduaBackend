import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServicesService } from './services.service';
import { CreateServiceInput } from './dto/create-service.input';
import { ServiceOutput } from './dto/service.output';

@Resolver()
export class ServicesResolver {
  constructor(private readonly servicesService: ServicesService) {}

  @Mutation(() => ServiceOutput)
  async createService(@Args('input') input: CreateServiceInput) {
    return this.servicesService.create(input);
  }

  @Query(() => [ServiceOutput])
  async getAllServices() {
    return this.servicesService.findAll();
  }

  @Query(() => ServiceOutput)
  async getServiceBySlug(@Args('slug') slug: string) {
    return this.servicesService.findBySlug(slug);
  }
}
