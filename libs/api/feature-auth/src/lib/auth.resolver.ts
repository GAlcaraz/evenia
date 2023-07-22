import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from '@evenia/api/generated-db-types';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-creds.dto';
import { AccessToken } from './dto/access-token.dto';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => AccessToken)
  login(@Args() authCredentialsDto: AuthCredentialsDto) {
    return this.authService.login(authCredentialsDto);
  }
}
