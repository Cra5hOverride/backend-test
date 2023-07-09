import { Module } from '@nestjs/common';
import { CountryService } from './service/country.service';
import { CountryController } from './controller/country.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Country } from './model/country.model';

@Module({
  imports:[
    TypegooseModule.forFeature([Country]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
