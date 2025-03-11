import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  short: string;
  long?: string;
  created_at?: Date;
  updated_at?: Date;
}

const LocationSchema: Schema = new Schema({
  short: { type: String, required: true },
  long: { type: String, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Location = mongoose.model<ILocation>('Location', LocationSchema);
