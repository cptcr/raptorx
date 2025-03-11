import mongoose, { Schema, Document } from 'mongoose';

export interface IAllocation extends Document {
  node_id: mongoose.Types.ObjectId;
  ip: string;
  ip_alias?: string;
  port: number;
  server_id?: mongoose.Types.ObjectId;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
}

const AllocationSchema: Schema = new Schema({
  node_id: { type: Schema.Types.ObjectId, ref: 'Node', required: true },
  ip: { type: String, required: true },
  ip_alias: { type: String, default: null },
  port: { type: Number, required: true },
  server_id: { type: Schema.Types.ObjectId, ref: 'Server', default: null },
  notes: { type: String, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Allocation = mongoose.model<IAllocation>('Allocation', AllocationSchema);
