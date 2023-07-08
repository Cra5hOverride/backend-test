import { prop } from "@typegoose/typegoose";


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

}

