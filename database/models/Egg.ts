import mongoose, { Schema, Document } from 'mongoose';

export interface IEgg extends Document {
  uuid: string;
  nest_id: mongoose.Types.ObjectId;
  author: string;
  name: string;
  description?: string;
  features?: any;
  docker_images?: any;
  file_denylist?: any;
  update_url?: string;
  config_files?: string;
  config_startup?: string;
  config_logs?: string;
  config_stop?: string;
  config_from?: mongoose.Types.ObjectId;
  startup?: string;
  script_container: string;
  copy_script_from?: mongoose.Types.ObjectId;
  script_entry: string;
  script_is_privileged: boolean;
  script_install?: string;
  created_at?: Date;
  updated_at?: Date;
  force_outgoing_ip: boolean;
}

const EggSchema: Schema = new Schema({
  uuid: { type: String, required: true },
  nest_id: { type: Schema.Types.ObjectId, ref: 'Nest', required: true },
  author: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, default: null },
  features: { type: Schema.Types.Mixed, default: null },
  docker_images: { type: Schema.Types.Mixed, default: null },
  file_denylist: { type: Schema.Types.Mixed, default: null },
  update_url: { type: String, default: null },
  config_files: { type: String, default: null },
  config_startup: { type: String, default: null },
  config_logs: { type: String, default: null },
  config_stop: { type: String, default: null },
  config_from: { type: Schema.Types.ObjectId, ref: 'Egg', default: null },
  startup: { type: String, default: null },
  script_container: { type: String, required: true, default: 'alpine:3.4' },
  copy_script_from: { type: Schema.Types.ObjectId, ref: 'Egg', default: null },
  script_entry: { type: String, required: true, default: 'ash' },
  script_is_privileged: { type: Boolean, required: true, default: true },
  script_install: { type: String, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
  force_outgoing_ip: { type: Boolean, required: true, default: false },
});

export const Egg = mongoose.model<IEgg>('Egg', EggSchema);
