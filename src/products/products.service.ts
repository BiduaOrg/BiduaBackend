// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.entity';
import { CreateProductInput, UpdateProductInput } from './products.input';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async create(createProductInput: CreateProductInput): Promise<Product> {
    const createdProduct = new this.productModel({
      ...createProductInput,
      createdAt: new Date(),
    });
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async update(updateProductInput: UpdateProductInput): Promise<Product | null> {
    const { id, ...updateData } = updateProductInput;
    return this.productModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async remove(id: string): Promise<Product | null> {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
