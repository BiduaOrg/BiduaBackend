import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './schemas/admin.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async create(email: string, password: string): Promise<Admin> {
    const hashed = await bcrypt.hash(password, 10);
    return this.adminModel.create({ email, password: hashed });
  }

  async findByEmail(email: string): Promise<Admin | null> {
    return this.adminModel.findOne({ email });
  }
}
