import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderSchema } from './rider.schema';
import { RiderService } from './rider.service';
import { RiderController } from './rider.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rider', schema: RiderSchema }])],
  controllers: [RiderController],
  providers: [RiderService],
})
export class RiderModule {}
