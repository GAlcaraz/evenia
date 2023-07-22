import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventResolver } from './event.resolver';
import { PrismaModule } from '@evenia/api/data-access-db';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [EventResolver, EventService, JwtService],
  imports: [PrismaModule],
})
export class EventModule {}
