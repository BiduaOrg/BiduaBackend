import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Lead extends Document {
  @Prop() name: string;
  @Prop() email: string;
  @Prop() phone: string;
  @Prop() division: string;
  @Prop({ default: 'new' }) status: string;
  @Prop() message: string;
}

export const LeadSchema = SchemaFactory.createForClass(Lead);
