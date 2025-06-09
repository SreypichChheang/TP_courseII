import { IsEmail, IsNotEmpty, MinLength, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(3)
  readonly password: string;
}
