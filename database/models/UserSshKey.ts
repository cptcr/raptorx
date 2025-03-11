import mongoose, { Schema, Document } from 'mongoose';

export interface ITaskLog extends Document {
  task_id: mongoose.Types.ObjectId;
  run_time: Date;
  run_status: number;
  response: string;
  created_at?: Date;
  updated_at?: Date;
}

const TaskLogSchema: Schema = new Schema({
  task_id: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
  run_time: { type: Date, required: true },
  run_status: { type: Number, required: true },
  response: { type: String, required: true },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const TaskLog = mongoose.model<ITaskLog>('TaskLog', TaskLogSchema);
