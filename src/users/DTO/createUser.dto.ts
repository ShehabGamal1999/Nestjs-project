import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUser {
  @IsString()
  @Length(2, 10, { message: 'name must be between 2 and 10 characters' })
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
