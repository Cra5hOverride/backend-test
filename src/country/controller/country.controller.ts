import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, HttpCode, ValidationPipe, HttpStatus } from '@nestjs/common';
import { CountryService } from '../service/country.service';
import { CreateCountryDto } from '../dto/create-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  @UsePipes(new ValidationPipe({ transform: true }))
  @HttpCode(HttpStatus.OK)
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(id, updateCountryDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.countryService.remove(id);
  }
}
