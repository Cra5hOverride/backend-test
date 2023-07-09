import { prop, Ref } from "@typegoose/typegoose";
import { Country } from "src/country/model/country.model";


export class User {

  @prop({ unique: true })
  username: string;

  @prop()
  password: string;

  @prop()
  firstname: string;

  @prop()
  lastname: string;

  @prop({ unique: true })
  email: string;

  @prop({ ref: () => Country })
  public country?: Ref<Country>;

}

