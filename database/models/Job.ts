import mongoose, { Schema, Document } from 'mongoose';

export interface IJob extends Document {
  queue: string;
  payload: string;
  attempts: number;
  reserved_at?: number;
  available_at: number;
  created_at: number;
}

const JobSchema: Schema = new Schema({
  queue: { type: String, required: true },
  payload: { type: String, required: true },
  attempts: { type: Number, required: true },
  reserved_at: { type: Number, default: null },
  available_at: { type: Number, required: true },
  created_at: { type: Number, required: true },
});

export const Job = mongoose.model<IJob>('Job', JobSchema);
