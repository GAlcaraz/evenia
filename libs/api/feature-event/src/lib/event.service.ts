import { Injectable } from '@nestjs/common';
import { PrismaService } from '@evenia/api/data-access-db';
import { CreateOneEventArgs, DeleteOneEventArgs, FindUniqueEventArgs, UpdateOneEventArgs } from '@evenia/api/generated-db-types';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneEventArgs: CreateOneEventArgs) {
    return this.prisma.event.create(createOneEventArgs);
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  findOne(findUniqueEventArgs: FindUniqueEventArgs) {
    return this.prisma.event.findUnique(findUniqueEventArgs);
  }

  update(updateOneEventArgs: UpdateOneEventArgs) {
    return this.prisma.event.update(updateOneEventArgs);
  }

  remove(deleteOneEventArgs: DeleteOneEventArgs) {
    return this.prisma.event.delete(deleteOneEventArgs);
  }
}
