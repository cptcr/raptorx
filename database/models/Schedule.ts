import mongoose, { Schema, Document } from 'mongoose';

export interface ISchedule extends Document {
  server_id: mongoose.Types.ObjectId;
  name: string;
  cron_day_of_week: string;
  cron_month: string;
  cron_day_of_month: string;
  cron_hour: string;
  cron_minute: string;
  is_active: boolean;
  is_processing: boolean;
  only_when_online: boolean;
  last_run_at?: Date;
  next_run_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

const ScheduleSchema: Schema = new Schema({
  server_id: { type: Schema.Types.ObjectId, ref: 'Server', required: true },
  name: { type: String, required: true },
  cron_day_of_week: { type: String, required: true },
  cron_month: { type: String, required: true },
  cron_day_of_month: { type: String, required: true },
  cron_hour: { type: String, required: true },
  cron_minute: { type: String, required: true },
  is_active: { type: Boolean, required: true },
  is_processing: { type: Boolean, required: true },
  only_when_online: { type: Boolean, required: true, default: false },
  last_run_at: { type: Date, default: null },
  next_run_at: { type: Date, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Schedule = mongoose.model<ISchedule>('Schedule', ScheduleSchema);
