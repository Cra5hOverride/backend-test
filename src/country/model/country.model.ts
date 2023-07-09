import { prop } from "@typegoose/typegoose";


export class Country {

  @prop({ unique: true })
  name: string;

  @prop({ unique: true })
  code: string;
}

