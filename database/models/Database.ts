import mongoose, { Schema, Document } from 'mongoose';

export interface IDatabase extends Document {
  server_id: mongoose.Types.ObjectId;
  database_host_id: mongoose.Types.ObjectId;
  database: string;
  username: string;
  remote: string;
  password: string;
  max_connections: number;
  created_at?: Date;
  updated_at?: Date;
}

const DatabaseSchema: Schema = new Schema({
  server_id: { type: Schema.Types.ObjectId, ref: 'Server', required: true },
  database_host_id: { type: Schema.Types.ObjectId, ref: 'DatabaseHost', required: true },
  database: { type: String, required: true },
  username: { type: String, required: true },
  remote: { type: String, required: true, default: '%' },
  password: { type: String, required: true },
  max_connections: { type: Number, required: true, default: 0 },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Database = mongoose.model<IDatabase>('Database', DatabaseSchema);
