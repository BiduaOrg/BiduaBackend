import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlockManagerDto } from './dto/create-block-manager.dto';

@Injectable()
export class BlockManagerService {
  constructor(
    @InjectModel('BlockManager') private blockManagerModel: Model<any>,
  ) {}

  async create(dto: CreateBlockManagerDto) {
    return await this.blockManagerModel.create(dto);
  }

  async findAll() {
    return await this.blockManagerModel.find().populate('agencyId assignedLeads');
  }

  async updateStatus(id: string, status: string) {
    return await this.blockManagerModel.findByIdAndUpdate(id, { status }, { new: true });
  }
}
