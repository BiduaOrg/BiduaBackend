import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../products/products.schema';
import { OrderService } from './order.service';
import { OrdersResolver } from './order.resolver';
import { OrderSchema } from './entities/order.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Order', schema: OrderSchema },
      { name: 'Product', schema: ProductSchema }
    ])
  ],
  providers: [OrderService, OrdersResolver],
})
export class OrderModule {}
