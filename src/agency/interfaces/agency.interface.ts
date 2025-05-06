import { Document } from 'mongoose';

export interface Agency extends Document {
  name: string;
  phone: string;
  email: string;
  district: string;
  state: string;
  type: string;
  depositPaid: boolean;
  status: string;
  createdAt: Date;
}
