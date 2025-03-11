import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  schedule_id: mongoose.Types.ObjectId;
  sequence_id: number;
  action: string;
  payload: string;
  time_offset: number;
  is_queued: boolean;
  continue_on_failure: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const TaskSchema: Schema = new Schema({
  schedule_id: { type: Schema.Types.ObjectId, ref: 'Schedule', required: true },
  sequence_id: { type: Number, required: true },
  action: { type: String, required: true },
  payload: { type: String, required: true },
  time_offset: { type: Number, required: true },
  is_queued: { type: Boolean, required: true },
  continue_on_failure: { type: Boolean, required: true, default: false },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Task = mongoose.model<ITask>('Task', TaskSchema);
