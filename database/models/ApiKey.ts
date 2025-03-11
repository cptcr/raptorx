import mongoose, { Schema, Document } from 'mongoose';

export interface IApiKey extends Document {
  user_id: mongoose.Types.ObjectId;
  key_type: number;
  identifier?: string;
  token: string;
  allowed_ips?: string;
  memo?: string;
  last_used_at?: Date;
  expires_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  r_servers: number;
  r_nodes: number;
  r_allocations: number;
  r_users: number;
  r_locations: number;
  r_nests: number;
  r_eggs: number;
  r_database_hosts: number;
  r_server_databases: number;
}

const ApiKeySchema: Schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  key_type: { type: Number, required: true, default: 0 },
  identifier: { type: String, default: null },
  token: { type: String, required: true },
  allowed_ips: { type: String, default: null },
  memo: { type: String, default: null },
  last_used_at: { type: Date, default: null },
  expires_at: { type: Date, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
  r_servers: { type: Number, required: true, default: 0 },
  r_nodes: { type: Number, required: true, default: 0 },
  r_allocations: { type: Number, required: true, default: 0 },
  r_users: { type: Number, required: true, default: 0 },
  r_locations: { type: Number, required: true, default: 0 },
  r_nests: { type: Number, required: true, default: 0 },
  r_eggs: { type: Number, required: true, default: 0 },
  r_database_hosts: { type: Number, required: true, default: 0 },
  r_server_databases: { type: Number, required: true, default: 0 },
});

export const ApiKey = mongoose.model<IApiKey>('ApiKey', ApiKeySchema);
