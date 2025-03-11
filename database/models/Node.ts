import mongoose, { Schema, Document } from 'mongoose';

export interface INode extends Document {
  uuid: string;
  public: boolean;
  name: string;
  description?: string;
  location_id: mongoose.Types.ObjectId;
  fqdn: string;
  scheme: string;
  behind_proxy: boolean;
  maintenance_mode: boolean;
  memory: number;
  memory_overallocate: number;
  disk: number;
  disk_overallocate: number;
  upload_size: number;
  daemon_token_id: string;
  daemon_token: string;
  daemonListen: number;
  daemonSFTP: number;
  daemonBase: string;
  created_at?: Date;
  updated_at?: Date;
}

const NodeSchema: Schema = new Schema({
  uuid: { type: String, required: true },
  public: { type: Boolean, required: true },
  name: { type: String, required: true },
  description: { type: String, default: null },
  location_id: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
  fqdn: { type: String, required: true },
  scheme: { type: String, required: true, default: 'https' },
  behind_proxy: { type: Boolean, required: true, default: false },
  maintenance_mode: { type: Boolean, required: true, default: false },
  memory: { type: Number, required: true },
  memory_overallocate: { type: Number, required: true, default: 0 },
  disk: { type: Number, required: true },
  disk_overallocate: { type: Number, required: true, default: 0 },
  upload_size: { type: Number, required: true, default: 100 },
  daemon_token_id: { type: String, required: true },
  daemon_token: { type: String, required: true },
  daemonListen: { type: Number, required: true, default: 8080 },
  daemonSFTP: { type: Number, required: true, default: 2022 },
  daemonBase: { type: String, required: true, default: '/home/daemon-files' },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Node = mongoose.model<INode>('Node', NodeSchema);
