import { Controller, Post, Get, Patch, Param, Body } from '@nestjs/common';

import { CreateRiderDto } from './dto/create-rider.dto';
import { RiderService } from './rider.service';

@Controller('riders')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Post()
create(@Body() createRiderDto: CreateRiderDto) {
  return this.riderService.create(createRiderDto);
}


  @Get()
  findAll() {
    return this.riderService.findAll();
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.riderService.updateStatus(id, status);
  }
}
