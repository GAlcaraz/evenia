import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EventService } from './event.service';
import {
  CreateOneEventArgs,
  DeleteOneEventArgs,
  FindUniqueEventArgs,
  UpdateOneEventArgs,
  Event,
} from '@evenia/api/generated-db-types';
import { JwtGuard, UserGuard } from '@evenia/api/feature-auth';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(() => Event)
  @UseGuards(JwtGuard)
  createEvent(
    @Args() createOneEventArgs: CreateOneEventArgs,
    @Context() context: any
  ) {
    const userEmail = context.req.user.email;
    return this.eventService.create(createOneEventArgs, userEmail);
  }

  @Query(() => [Event])
  events(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Query(() => Event)
  event(@Args() findUniqueEventArgs: FindUniqueEventArgs) {
    return this.eventService.findOne(findUniqueEventArgs);
  }

  @Mutation(() => Event)
  @UseGuards(JwtGuard)
  updateEvent(
    @Args() updateOneEventArgs: UpdateOneEventArgs,
    @Context() context: any
  ) {
    const userEmail = context.req.user.email;

    return this.eventService.update(updateOneEventArgs, userEmail);
  }

  @Mutation(() => Event)
  @UseGuards(JwtGuard)
  removeEvent(
    @Args() deleteOneEventArgs: DeleteOneEventArgs,
    @Context() context: any
  ) {
    const userEmail = context.req.user.email;

    return this.eventService.remove(deleteOneEventArgs, userEmail);
  }

  @ResolveField('isOwner', (returns) => Boolean, { nullable: true })
  @UseGuards(UserGuard)
  async isOwner(@Parent() event: Event, @Context() context: any) {
    const userEmail = context.req.user.email;
    if (!userEmail) {
      return null;
    }
    return this.eventService.isOwner(event.id, userEmail);
  }
}
