import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesResolver } from './services.resolver';
import { ServicesService } from './services.service';
import { Service, ServiceSchema } from './services.model';


@Module({
  imports: [MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }])],

  
  providers: [ServicesResolver, ServicesService],
})
export class ServicesModule {}
