import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeadsService } from './leads.service';
import { Lead } from './entities/lead.entity';
import { CreateLeadInput } from './dto/create-lead.input';
import { LeadOutput } from './dto/lead.output';
import { UpdateLeadInput } from './dto/update-lead.input';
import { plainToInstance } from 'class-transformer';
import { GqlAuthGuard } from 'src/auth/jwt.guard';
import { UseGuards } from '@nestjs/common';


@Resolver(() => Lead)
export class LeadsResolver {
  constructor(private readonly leadsService: LeadsService) {}

  @Mutation(() => Lead)
  createLead(@Args('input') input: CreateLeadInput) {
    return this.leadsService.create(input);
  }

  @Query(() => [Lead])
  findAllLeads() {
    return this.leadsService.findAll();
  }
  @UseGuards(GqlAuthGuard)
  @Query(() => LeadOutput, { nullable: true })
async getLeadById(@Args('id') id: string): Promise<LeadOutput | null> {
  const lead = await this.leadsService.findById(id);
  if (!lead) return null;

  return plainToInstance(LeadOutput, lead.toObject());
}

@UseGuards(GqlAuthGuard)
@Mutation(() => LeadOutput, { nullable: true })
async updateLead(
  @Args('id') id: string,
  @Args('input') input: UpdateLeadInput
): Promise<LeadOutput | null> {
  const updatedLead = await this.leadsService.updateLead(id, input);
  if (!updatedLead) return null;

  return plainToInstance(LeadOutput, updatedLead.toObject());
}

}
