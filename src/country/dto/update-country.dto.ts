import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCountryDto } from './create-country.dto';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
    @ApiProperty()
    name: string;

    @ApiProperty()
    code: string;
}
