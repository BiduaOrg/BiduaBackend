import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { User } from './user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersService } from './user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  @Mutation(() => Boolean)
  async removeUser(@Args('id') id: string) {
    return this.usersService.delete(id);
  }
}