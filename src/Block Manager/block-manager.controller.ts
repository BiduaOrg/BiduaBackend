import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { BlockManagerService } from './block-manager.service';
import { CreateBlockManagerDto } from './dto/create-block-manager.dto';

@Controller('admin/block-managers')
export class BlockManagerController {
  constructor(private readonly service: BlockManagerService) {}

  @Post()
  create(@Body() dto: CreateBlockManagerDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.service.updateStatus(id, status);
  }
}
