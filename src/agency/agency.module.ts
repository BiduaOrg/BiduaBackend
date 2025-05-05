import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { AgencySchema } from './agency.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Agency', schema: AgencySchema }])],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule {}
