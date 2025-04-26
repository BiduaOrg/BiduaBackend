import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/schemas/admin.schema';
import { LoginResponse } from './dto/login-response';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,

    @InjectModel(Admin.name)
    private readonly adminModel: Model<Admin>,
  ) {}

  async validateAdmin(email: string, password: string) {
    const admin = await this.adminService.findByEmail(email);
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return admin;
  }
 

  async registerAdmin(email: string, password: string) {
    const existing = await this.adminModel.findOne({ email });
    if (existing) {
      throw new Error('Admin already exists');
    }

    const newAdmin = new this.adminModel({ email, password });
    return newAdmin.save(); // Triggers password hash pre-save
  }



  async login(email: string, password: string): Promise<LoginResponse> {
    const admin = await this.validateAdmin(email, password);
    const payload = { sub: admin._id, email: admin.email };
    return {
      access_token: this.jwtService.sign(payload),
      admin: {
        _id: admin.id.toString(),
        email: admin.email,
        role: admin.role,
      },
    };
  }

}
