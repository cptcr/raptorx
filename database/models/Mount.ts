import mongoose, { Schema, Document } from 'mongoose';

export interface IMount extends Document {
  uuid: string;
  name: string;
  description?: string;
  source: string;
  target: string;
  read_only: boolean;
  user_mountable: boolean;
}

const MountSchema: Schema = new Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, default: null },
  source: { type: String, required: true },
  target: { type: String, required: true },
  read_only: { type: Boolean, required: true },
  user_mountable: { type: Boolean, required: true },
});

export const Mount = mongoose.model<IMount>('Mount', MountSchema);
