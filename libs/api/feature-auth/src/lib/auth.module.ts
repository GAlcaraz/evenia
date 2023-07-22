import { Module } from '@nestjs/common';
import { UserModule } from '@evenia/api/feature-user';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { jwtConstants } from './constants';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '1h',
        algorithm: 'HS512',
      },
    }),
    UserModule,
  ],

  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
  //   controllers: [AuthController],
})
export class AuthModule {}
