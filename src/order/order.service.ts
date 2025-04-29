import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderInput } from './dto/create-order.input';
import { Order } from './order.model';
import { Product } from 'src/products/products.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<any>,
    @InjectModel('Product') private readonly productModel: Model<any>,
  ) {}

  async create(createOrderInput: CreateOrderInput): Promise<Order> {
    const product = await this.productModel.findById(createOrderInput.productId);
    if (!product) throw new Error('Product does not exist');

    const createdOrder = new this.orderModel({
      user: createOrderInput.user,
      productId: createOrderInput.productId,
      quantity: createOrderInput.quantity,
      amount: createOrderInput.amount,
      status: 'pending',
    });

    return createdOrder.save();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).populate('productId').exec(); // 👈 populate
  }

  async findAll(): Promise<Order[]> {
    // Populate the 'productId' field
    return this.orderModel
      .find()
      .populate('productId')  // Make sure this is properly populating
      .exec();
  }

  
  
}
