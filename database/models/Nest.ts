import mongoose, { Schema, Document } from 'mongoose';

export interface INest extends Document {
  uuid: string;
  author: string;
  name: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
}

const NestSchema: Schema = new Schema({
  uuid: { type: String, required: true },
  author: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Nest = mongoose.model<INest>('Nest', NestSchema);
