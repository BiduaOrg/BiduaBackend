import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { join } from 'path';

import { LeadsModule } from './leads/leads.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { EmailModule } from './email/email.module';
import { OrderModule } from './order/order.module';
import { AgencyModule } from './agency/agency.module';
import { BlockManagerModule } from './Block Manager/block-manager.module';
import { RiderModule } from './rider/rider.module';
import { TicketsModule } from './tickets/tickets.module';
import { ServicesModule } from './services/services.module';
import { ServiceOrdersModule } from './service-orders/service-orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/bidua'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true,
      resolvers: { JSON: GraphQLJSON, JSONObject: GraphQLJSONObject },
    }),
    LeadsModule,
    AuthModule,
    AdminModule,
    ProductsModule,
    EmailModule,
    OrderModule,
    AgencyModule,
    BlockManagerModule,
    RiderModule,
    TicketsModule,
    ServicesModule,
    ServiceOrdersModule,
  ],
})
export class AppModule {}
