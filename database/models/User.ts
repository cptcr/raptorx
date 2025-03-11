import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  external_id?: string;
  uuid: string;
  username: string;
  email: string;
  name_first?: string;
  name_last?: string;
  password: string;
  remember_token?: string;
  language: string;
  root_admin: boolean;
  use_totp: boolean;
  totp_secret?: string;
  totp_authenticated_at?: Date;
  gravatar: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const UserSchema: Schema = new Schema({
  external_id: { type: String, default: null },
  uuid: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name_first: { type: String, default: null },
  name_last: { type: String, default: null },
  password: { type: String, required: true },
  remember_token: { type: String, default: null },
  language: { type: String, required: true, default: 'en' },
  root_admin: { type: Boolean, required: true, default: false },
  use_totp: { type: Boolean, required: true },
  totp_secret: { type: String, default: null },
  totp_authenticated_at: { type: Date, default: null },
  gravatar: { type: Boolean, required: true, default: true },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const User = mongoose.model<IUser>('User', UserSchema);
