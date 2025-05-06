import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agency } from './interfaces/agency.interface'; // ya ./schemas/agency.schema agar interface nahi use kar rahe ho
import { CreateAgencyDto } from './dto/create-agency.dto';

@Injectable()
export class AgencyService {
  constructor(@InjectModel('Agency') private agencyModel: Model<Agency>) {}

  async create(createAgencyDto: CreateAgencyDto): Promise<Agency> {
    const newAgency = new this.agencyModel(createAgencyDto);
    return await newAgency.save();
  }

  async findAll(): Promise<Agency[]> {
    return await this.agencyModel.find().exec();
  }

  async updateStatus(id: string, status: string): Promise<Agency> {
    const updated = await this.agencyModel.findByIdAndUpdate(id, { status }, { new: true });

    if (!updated) {
      throw new NotFoundException(`Agency with id ${id} not found`);
    }

    return updated;
  }
}
