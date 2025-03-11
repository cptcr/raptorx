import mongoose, { Schema, Document } from 'mongoose';

export interface IApiLog extends Document {
  authorized: boolean;
  error?: string;
  key?: string;
  method: string;
  route: string;
  content?: string;
  user_agent: string;
  request_ip: string;
  created_at?: Date;
  updated_at?: Date;
}

const ApiLogSchema: Schema = new Schema({
  authorized: { type: Boolean, required: true },
  error: { type: String, default: null },
  key: { type: String, default: null },
  method: { type: String, required: true },
  route: { type: String, required: true },
  content: { type: String, default: null },
  user_agent: { type: String, required: true },
  request_ip: { type: String, required: true },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const ApiLog = mongoose.model<IApiLog>('ApiLog', ApiLogSchema);
