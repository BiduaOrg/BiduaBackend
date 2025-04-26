import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Schema()
export class Admin extends Document {
  @Prop({ required: true, unique: true }) email: string;

  @Prop({ required: true }) password: string; // Will be hashed before saving

  @Prop({ default: 'admin' }) role: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

// ✅ Hash password before saving
AdminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
