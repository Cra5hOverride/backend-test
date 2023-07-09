import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from '../dto/create-country.dto';
import { UpdateCountryDto } from '../dto/update-country.dto';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from "@typegoose/typegoose";
import { Country } from '../model/country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country)
    private readonly countryModel: ReturnModelType<typeof Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    const createdCountry = new this.countryModel(createCountryDto);
    return await createdCountry.save();
  }

  async findAll() {
    return await this.countryModel.find();
  }

  async findOne(id: string) {
    return await this.countryModel.findById(id);
  }

  async update(id: string, updateCountryDto: UpdateCountryDto) {
    const user = await this.countryModel.findById(id);
    Object.assign(user, updateCountryDto);
    await user.save();
    return user;
  }

  async remove(id: string) {
    const user = await this.countryModel.findById(id);
    return await user.deleteOne();
  }
}
