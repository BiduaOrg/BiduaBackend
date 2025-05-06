
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceOrder } from './service-orders.model';
import { CreateServiceOrderInput } from './dto/create-service-order.input';




@Injectable()
export class ServiceOrdersService {
  constructor(
    @InjectModel(ServiceOrder.name) private readonly serviceOrderModel: Model<ServiceOrder>,
  ) {}

  async create(createServiceOrderInput: CreateServiceOrderInput): Promise<ServiceOrder> {
    const { serviceSlug, data, userEmail, razorpay_order_id, razorpay_payment_id, razorpay_signature } = createServiceOrderInput;

    const serviceOrder = new this.serviceOrderModel({
      serviceSlug,
      data,
      userEmail,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    return serviceOrder.save();
  }

  async getAllServiceOrders(): Promise<ServiceOrder[]> {
    return this.serviceOrderModel.find().exec();
  }

  
}
