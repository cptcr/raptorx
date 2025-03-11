import mongoose, { Schema, Document } from 'mongoose';

export interface IAuditLog extends Document {
  uuid: string;
  is_system: boolean;
  user_id?: mongoose.Types.ObjectId;
  server_id?: mongoose.Types.ObjectId;
  action: string;
  subaction?: string;
  device: any;
  metadata: any;
  created_at: Date;
}

const AuditLogSchema: Schema = new Schema({
  uuid: { type: String, required: true },
  is_system: { type: Boolean, required: true, default: false },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  server_id: { type: Schema.Types.ObjectId, ref: 'Server', default: null },
  action: { type: String, required: true },
  subaction: { type: String, default: null },
  device: { type: Schema.Types.Mixed, required: true },
  metadata: { type: Schema.Types.Mixed, required: true },
  created_at: { type: Date, required: true },
});

export const AuditLog = mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);
