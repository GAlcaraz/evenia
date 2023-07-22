import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@evenia/api/feature-user';
import { AuthCredentialsDto } from './dto/auth-creds.dto';
import { JwtPayload } from 'jsonwebtoken';
import { AccessToken } from './dto/access-token.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async login(authCredentialsDto: AuthCredentialsDto): Promise<AccessToken> {
    const { email, password } = authCredentialsDto;
    const user = await this.usersService.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { sub: user.id, email: user.email };

    const accessToken: string = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
