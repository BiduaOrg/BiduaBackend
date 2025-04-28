import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsResolver } from './tickets.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketSchema } from './schema/ticket.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ticket', schema: TicketSchema }]),
  ],
  providers: [TicketsService, TicketsResolver],
})
export class TicketsModule {}
