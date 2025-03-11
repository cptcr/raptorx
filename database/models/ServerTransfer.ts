import mongoose, { Schema, Document } from 'mongoose';

export interface IServerTransfer extends Document {
  server_id: mongoose.Types.ObjectId;
  successful?: boolean;
  old_node: mongoose.Types.ObjectId;
  new_node: mongoose.Types.ObjectId;
  old_allocation: mongoose.Types.ObjectId;
  new_allocation: mongoose.Types.ObjectId;
  old_additional_allocations?: any;
  new_additional_allocations?: any;
  archived: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const ServerTransferSchema: Schema = new Schema({
  server_id: { type: Schema.Types.ObjectId, ref: 'Server', required: true },
  successful: { type: Boolean, default: null },
  old_node: { type: Schema.Types.ObjectId, ref: 'Node', required: true },
  new_node: { type: Schema.Types.ObjectId, ref: 'Node', required: true },
  old_allocation: { type: Schema.Types.ObjectId, ref: 'Allocation', required: true },
  new_allocation: { type: Schema.Types.ObjectId, ref: 'Allocation', required: true },
  old_additional_allocations: { type: Schema.Types.Mixed, default: null },
  new_additional_allocations: { type: Schema.Types.Mixed, default: null },
  archived: { type: Boolean, required: true, default: false },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const ServerTransfer = mongoose.model<IServerTransfer>('ServerTransfer', ServerTransferSchema);
