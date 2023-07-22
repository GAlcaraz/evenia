import { Module } from '@nestjs/common';
import { UserModule } from '@evenia/api/feature-user';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env['AUTH_SECRET'],
      signOptions: {
        expiresIn: '1h',
        algorithm: 'HS512',
      },
    }),
    UserModule,
  ],

  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
  //   controllers: [AuthController],
})
export class AuthModule {}
