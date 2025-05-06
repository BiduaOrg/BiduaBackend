import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from './services.model';
import { CreateServiceInput } from './dto/create-service.input';

@Injectable()
export class ServicesService {
  constructor(@InjectModel(Service.name) private serviceModel: Model<Service>) {}

  async create(input: CreateServiceInput): Promise<Service> {
    const created = new this.serviceModel(input);
    return created.save();
  }

  async findAll(): Promise<Service[]> {
    return this.serviceModel.find().exec();
  }

  async findBySlug(slug: string): Promise<Service | null> {
    return this.serviceModel.findOne({ slug }).exec();
  }
}
