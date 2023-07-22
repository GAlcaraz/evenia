import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventService } from './event.service';
import {
  CreateOneEventArgs,
  DeleteOneEventArgs,
  FindUniqueEventArgs,
  UpdateOneEventArgs,
  Event,
} from '@evenia/api/generated-db-types';
import { OwnerGuard } from '@evenia/api/feature-auth';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(() => Event)
  createEvent(@Args() createOneEventArgs: CreateOneEventArgs) {
    return this.eventService.create(createOneEventArgs);
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
  @UseGuards(OwnerGuard)
  updateEvent(@Args() updateOneEventArgs: UpdateOneEventArgs) {
    return this.eventService.update(updateOneEventArgs);
  }

  @Mutation(() => Event)
  @UseGuards(OwnerGuard)
  removeEvent(@Args() deleteOneEventArgs: DeleteOneEventArgs) {
    return this.eventService.remove(deleteOneEventArgs);
  }
}
