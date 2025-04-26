import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lead } from './schemas/lead.schema';
import { CreateLeadInput } from './dto/create-lead.input';
import { UpdateLeadInput } from './dto/update-lead.input';

@Injectable()
export class LeadsService {
  constructor(@InjectModel(Lead.name) private leadModel: Model<Lead>) {}

  create(input: CreateLeadInput): Promise<Lead> {
    const created = new this.leadModel(input);
    return created.save();
  }

  findAll(): Promise<Lead[]> {
    return this.leadModel.find().exec();
  }

  async findById(id: string): Promise<Lead | null> {
    return this.leadModel.findById(id);
  }
  
  async updateLead(id: string, input: UpdateLeadInput): Promise<Lead | null> {
    return this.leadModel.findByIdAndUpdate(id, input, { new: true });
  }
  
}
