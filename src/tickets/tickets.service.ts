import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from './ticket.model';
import { CreateTicketInput } from './dto/create-ticket.dto';
import { UpdateTicketInput } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(@InjectModel('Ticket') private ticketModel: Model<Ticket>) {}

  async create(createTicketInput: CreateTicketInput): Promise<Ticket> {
    const createdTicket = new this.ticketModel(createTicketInput);
    return createdTicket.save();
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().sort({ createdAt: -1 });
  }

  async findOne(id: string): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(id);
    if (!ticket) throw new NotFoundException('Ticket not found');
    return ticket;
  }

  async update(id: string, updateTicketInput: UpdateTicketInput): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(id);  // Assuming ticketModel is your MongoDB model
    
    if (!ticket) {
      throw new Error('Ticket not found');
    }
  
    // Update status if provided
    if (updateTicketInput.status) {
      ticket.status = updateTicketInput.status;
    }
  
    // Update notes if provided
    if (updateTicketInput.note) {
      ticket.notes.push({
        body: updateTicketInput.note,
        addedBy: 'Support Team', // You can add the name of the user who adds the note here
        createdAt: new Date()
      });
    }
  
    await ticket.save(); // Save the updated ticket
  
    return ticket;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.ticketModel.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}
