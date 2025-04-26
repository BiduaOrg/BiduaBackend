import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsResolver } from './leads.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Lead, LeadSchema } from './schemas/lead.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Lead.name, schema: LeadSchema }])],
  providers: [LeadsService, LeadsResolver],
})
export class LeadsModule {}
