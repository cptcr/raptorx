import mongoose, { Schema, Document } from 'mongoose';

export interface IBackup extends Document {
  server_id: mongoose.Types.ObjectId;
  uuid: string;
  upload_id?: string;
  is_successful: boolean;
  is_locked: boolean;
  name: string;
  ignored_files: string;
  disk: string;
  checksum?: string;
  bytes: number;
  completed_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

const BackupSchema: Schema = new Schema({
  server_id: { type: Schema.Types.ObjectId, ref: 'Server', required: true },
  uuid: { type: String, required: true },
  upload_id: { type: String, default: null },
  is_successful: { type: Boolean, required: true, default: false },
  is_locked: { type: Boolean, required: true, default: false },
  name: { type: String, required: true },
  ignored_files: { type: String, required: true },
  disk: { type: String, required: true },
  checksum: { type: String, default: null },
  bytes: { type: Number, required: true, default: 0 },
  completed_at: { type: Date, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
  deleted_at: { type: Date, default: null },
});

export const Backup = mongoose.model<IBackup>('Backup', BackupSchema);
