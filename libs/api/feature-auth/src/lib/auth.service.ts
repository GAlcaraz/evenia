import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@evenia/api/feature-user';
import { AuthCredentialsDto } from './dto/auth-creds.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async login(authCredentialsDto: AuthCredentialsDto): Promise<boolean> {
    const { email, password } = authCredentialsDto;
    const user = await this.usersService.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
