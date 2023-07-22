import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '@evenia/api/data-access-db';
import { UserService } from './user.service';

@Module({
  providers: [UserResolver, UserService],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
