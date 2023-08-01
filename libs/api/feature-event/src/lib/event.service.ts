import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@evenia/api/data-access-db';
import {
  CreateOneEventArgs,
  DeleteOneEventArgs,
  FindUniqueEventArgs,
  UpdateOneEventArgs,
  Event,
} from '@evenia/api/generated-db-types';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneEventArgs: CreateOneEventArgs, userEmail: string) {
    if (
      createOneEventArgs.data.owner.connect &&
      createOneEventArgs.data.owner.connect?.id
    ) {
      delete createOneEventArgs.data.owner.connect.id;
      createOneEventArgs.data.owner.connect.email = userEmail;
    }
    return this.prisma.event.create(createOneEventArgs);
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  async findOne(findUniqueEventArgs: FindUniqueEventArgs) {
    findUniqueEventArgs.where;
    return this.prisma.event.findUnique({
      where: findUniqueEventArgs.where,
      include: { owner: true },
    });
  }

  async update(updateOneEventArgs: UpdateOneEventArgs, userEmail: string) {
    this.validateOwnership(updateOneEventArgs.where.id, userEmail);

    return this.prisma.event.update(updateOneEventArgs);
  }

  remove(deleteOneEventArgs: DeleteOneEventArgs, userEmail: string) {
    this.validateOwnership(deleteOneEventArgs.where.id, userEmail);
    return this.prisma.event.delete(deleteOneEventArgs);
  }

  async isOwner(eventId: string, userEmail: string) {
    try {
      await this.validateOwnership(eventId, userEmail);
    } catch (e: any) {
      return false;
    }
    return true;
  }

  async owner(eventId: string) {
    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });
    const user = await this.prisma.user.findUnique({
      where: { id: event?.ownerId },
    });

    return user;
  }

  private async validateOwnership(
    eventId: string | undefined,
    ownerEmail: string
  ) {
    const user = await this.prisma.user.findUnique({
      where: { email: ownerEmail },
    });

    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });
    if (user?.id != event?.ownerId) {
      throw UnauthorizedException;
    }
  }
}
