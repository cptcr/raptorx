import mongoose, { Schema, Document } from 'mongoose';

export interface IFailedJob extends Document {
  uuid?: string;
  connection: string;
  queue: string;
  payload: string;
  failed_at: Date;
}

const FailedJobSchema: Schema = new Schema({
  uuid: { type: String, default: null },
  connection: { type: String, required: true },
  queue: { type: String, required: true },
  payload: { type: String, required: true },
  failed_at: { type: Date, required: true },
});

export const FailedJob = mongoose.model<IFailedJob>('FailedJob', FailedJobSchema);
