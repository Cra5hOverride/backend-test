import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty, 
    Length,
    Matches,
    MaxLength,
  } from 'class-validator';

export class CreateUserDto {

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(8)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  country: string;

}
