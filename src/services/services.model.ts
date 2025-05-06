import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: true } })
export class Service extends Document {
  @Prop() title: string;
  @Prop() slug: string;
  @Prop() description: string;
  @Prop() price: number;
  @Prop([String]) fields: string[];
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
