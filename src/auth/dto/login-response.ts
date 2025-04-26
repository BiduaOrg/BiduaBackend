import { ObjectType, Field } from '@nestjs/graphql';
import { Admin } from 'src/admin/entities/admin.entity';

import { RegisterAdminOutput } from './register-admin.output';

@ObjectType()
export class LoginResponse {
  @Field() access_token: string;
  // @Field(() => Admin) admin: Admin;

  @Field(() => RegisterAdminOutput)
  admin: RegisterAdminOutput;
}
