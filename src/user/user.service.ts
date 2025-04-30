import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = new this.userModel(createUserInput);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().sort({ createdAt: -1 });
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const updated = await this.userModel.findByIdAndUpdate(id, updateUserInput, { new: true });
    if (!updated) throw new NotFoundException('User not found');
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.userModel.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}