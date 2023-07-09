import { prop, Ref } from "@typegoose/typegoose";
import { Country } from "src/country/model/country.model";


export class User {

  @prop({ unique: true })
  public username: string;

  @prop()
  public password: string;

  @prop()
  public firstname: string;

  @prop()
  public lastname: string;

  @prop({ unique: true })
  public email: string;

  @prop({ ref: () => Country })
  public country?: Ref<Country>;

}

