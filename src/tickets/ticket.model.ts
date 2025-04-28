import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Ticket {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  subject: string;

  @Field()
  message: string;

  @Field()
  status: string;

  @Field(() => [Note])
  notes: Note[];

  @Field()
  createdAt: Date;
}

@ObjectType()
export class Note {
  @Field()
  body: string;

  @Field()
  addedBy: string;

  @Field()
  createdAt: Date;
}
