import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './dto/login-response';
import { Admin } from 'src/admin/schemas/admin.schema';
import { RegisterAdminOutput } from './dto/register-admin.output';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}
  

@Mutation(() => RegisterAdminOutput)
async registerAdmin(
  @Args('email') email: string,
  @Args('password') password: string,
): Promise<RegisterAdminOutput> {
  const admin = await this.authService.registerAdmin(email, password);
  return {
    _id: admin.id.toString(), // ✅ cast to string
    email: admin.email,
    role: admin.role,
  };
}

@Mutation(() => LoginResponse)
async login(
  @Args('email') email: string,
  @Args('password') password: string,
): Promise<LoginResponse> {
  return this.authService.login(email, password);
}

}
