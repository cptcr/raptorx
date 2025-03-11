import mongoose, { Schema, Document } from 'mongoose';

export interface IActivityLog extends Document {
  batch?: string;
  event: string;
  ip: string;
  description?: string;
  actor_type?: string;
  actor_id?: mongoose.Types.ObjectId;
  api_key_id?: mongoose.Types.ObjectId;
  properties: any;
  timestamp: Date;
}

const ActivityLogSchema: Schema = new Schema({
  batch: { type: String, default: null },
  event: { type: String, required: true },
  ip: { type: String, required: true },
  description: { type: String, default: null },
  actor_type: { type: String, default: null },
  actor_id: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  api_key_id: { type: Schema.Types.ObjectId, ref: 'ApiKey', default: null },
  properties: { type: Schema.Types.Mixed, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const ActivityLog = mongoose.model<IActivityLog>('ActivityLog', ActivityLogSchema);
