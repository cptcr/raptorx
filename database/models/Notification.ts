import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  _id: string;
  type: string;
  notifiable_type: string;
  notifiable_id: number;
  data: string;
  read_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

const NotificationSchema: Schema = new Schema({
  _id: { type: String, required: true },
  type: { type: String, required: true },
  notifiable_type: { type: String, required: true },
  notifiable_id: { type: Number, required: true },
  data: { type: String, required: true },
  read_at: { type: Date, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Notification = mongoose.model<INotification>('Notification', NotificationSchema);
