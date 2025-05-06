import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { AgencyService } from './agency.service';
import { CreateAgencyDto } from './dto/create-agency.dto';

@Controller('admin/agencies')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post()
  async create(@Body() createAgencyDto: CreateAgencyDto) {
    return this.agencyService.create(createAgencyDto);
  }

  @Get()
  async findAll() {
    return this.agencyService.findAll();
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.agencyService.updateStatus(id, status);
  }
}
