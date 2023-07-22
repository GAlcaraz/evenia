import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class AuthCredentialsDto {
  @IsString()
  @Field()
  // @MinLength(4)
  // @MaxLength(20)
  email!: string;

  @IsString()
  @Field()
  // @MinLength(8)
  // @MaxLength(32)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: 'password is too weak',
  // })
  password!: string;
}
