import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.model';
import { CreateTicketInput } from './dto/create-ticket.dto';
import { UpdateTicketInput } from './dto/update-ticket.dto';


@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(private readonly ticketsService: TicketsService) {}

  @Query(() => [Ticket])
  async tickets() {
    return this.ticketsService.findAll();
  }

  @Query(() => Ticket)
  async ticket(@Args('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Mutation(() => Ticket)
  async createTicket(@Args('createTicketInput') createTicketInput: CreateTicketInput) {
    return this.ticketsService.create(createTicketInput);
  }

  @Mutation(() => Ticket)
  async updateTicket(
    @Args('id') id: string,
    @Args('updateTicketInput') updateTicketInput: UpdateTicketInput,
  ) {
    return this.ticketsService.update(id, updateTicketInput);
  }

  @Mutation(() => Boolean)
  async removeTicket(@Args('id') id: string) {
    return this.ticketsService.delete(id);
  }
}
