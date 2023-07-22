import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '@evenia/api/feature-user';
import { AuthCredentialsDto } from './dto/auth-creds.dto';
import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async login(
    authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;

    const user = this.usersService.findOne({ where: { email } });
    const payload: JwtPayload = { email };

    const accessToken: string = this.jwtService.sign(payload);
    // const accessToken: string = await this.jwtService.sign(payload, {
    //   privateKey: rsa,
    //   algorithm: 'RS256',
    // });
    return { accessToken };
  }
}
