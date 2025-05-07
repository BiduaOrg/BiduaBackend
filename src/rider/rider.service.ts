import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRiderDto } from './dto/create-rider.dto';

@Injectable()
export class RiderService {
  constructor(@InjectModel('Rider') private riderModel: Model<any>) {}

  async create(dto: CreateRiderDto) {
    return this.riderModel.create(dto);
  }

  async findAll() {
    return this.riderModel.find().populate('blockManagerId');
  }

  async updateStatus(id: string, status: string) {
    return this.riderModel.findByIdAndUpdate(id, { status }, { new: true });
  }
}
