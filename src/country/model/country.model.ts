import { prop } from "@typegoose/typegoose";


export class Country {

  @prop({ unique: true })
  public name: string;

  @prop({ unique: true })
  public code: string;
}

