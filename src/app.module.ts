import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { LeadsModule } from './leads/leads.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { AgencyModule } from './agency/agency.module';
import { BlockManagerModule } from './Block Manager/block-manager.module';
import { RiderModule } from './rider/rider.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/bidua'),

    LeadsModule,
    AuthModule,
    AdminModule,
    ProductsModule,
    OrderModule,
    AgencyModule,
    BlockManagerModule,
    RiderModule
    // Add your feature modules here later
  ],
})
export class AppModule {}
