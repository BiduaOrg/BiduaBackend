import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceOrdersResolver } from './service-orders.resolver';
import { ServiceOrdersService } from './service-orders.service';
import { ServiceOrder, ServiceOrderSchema } from './service-orders.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: ServiceOrder.name, schema: ServiceOrderSchema }])],
  providers: [ServiceOrdersResolver, ServiceOrdersService],
})
export class ServiceOrdersModule {}
