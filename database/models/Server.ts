import mongoose, { Schema, Document } from 'mongoose';

export interface IServer extends Document {
  external_id?: string;
  uuid: string;
  uuidShort: string;
  node_id: mongoose.Types.ObjectId;
  name: string;
  description: string;
  status?: string;
  skip_scripts: boolean;
  owner_id: mongoose.Types.ObjectId;
  memory: number;
  swap: number;
  disk: number;
  io: number;
  cpu: number;
  threads?: string;
  oom_disabled: boolean;
  allocation_id: mongoose.Types.ObjectId;
  nest_id: mongoose.Types.ObjectId;
  egg_id: mongoose.Types.ObjectId;
  startup: string;
  image: string;
  allocation_limit?: number;
  database_limit: number;
  backup_limit: number;
  created_at?: Date;
  updated_at?: Date;
  installed_at?: Date;
}

const ServerSchema: Schema = new Schema({
  external_id: { type: String, default: null },
  uuid: { type: String, required: true },
  uuidShort: { type: String, required: true },
  node_id: { type: Schema.Types.ObjectId, ref: 'Node', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: null },
  skip_scripts: { type: Boolean, required: true, default: false },
  owner_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  memory: { type: Number, required: true },
  swap: { type: Number, required: true },
  disk: { type: Number, required: true },
  io: { type: Number, required: true },
  cpu: { type: Number, required: true },
  threads: { type: String, default: null },
  oom_disabled: { type: Boolean, required: true, default: false },
  allocation_id: { type: Schema.Types.ObjectId, ref: 'Allocation', required: true },
  nest_id: { type: Schema.Types.ObjectId, ref: 'Nest', required: true },
  egg_id: { type: Schema.Types.ObjectId, ref: 'Egg', required: true },
  startup: { type: String, required: true },
  image: { type: String, required: true },
  allocation_limit: { type: Number, default: null },
  database_limit: { type: Number, required: true, default: 0 },
  backup_limit: { type: Number, required: true, default: 0 },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
  installed_at: { type: Date, default: null },
});

export const Server = mongoose.model<IServer>('Server', ServerSchema);
