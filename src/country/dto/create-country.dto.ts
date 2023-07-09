import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty, 
    Length,
    Matches,
    MaxLength,
  } from 'class-validator';

export class CreateCountryDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    code: string;
}
