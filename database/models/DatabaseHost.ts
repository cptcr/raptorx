import mongoose, { Schema, Document } from 'mongoose';

export interface IDatabaseHost extends Document {
  name: string;
  host: string;
  port: number;
  username: string;
  password: string;
  max_databases?: number;
  node_id?: mongoose.Types.ObjectId;
  created_at?: Date;
  updated_at?: Date;
}

const DatabaseHostSchema: Schema = new Schema({
  name: { type: String, required: true },
  host: { type: String, required: true },
  port: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  max_databases: { type: Number, default: null },
  node_id: { type: Schema.Types.ObjectId, ref: 'Node', default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const DatabaseHost = mongoose.model<IDatabaseHost>('DatabaseHost', DatabaseHostSchema);
