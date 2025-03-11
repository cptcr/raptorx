import mongoose, { Schema, Document } from 'mongoose';

export interface ISession extends Document {
  _id: string;
  user_id?: mongoose.Types.ObjectId;
  ip_address?: string;
  user_agent?: string;
  payload: string;
  last_activity: number;
}

const SessionSchema: Schema = new Schema({
  _id: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  ip_address: { type: String, default: null },
  user_agent: { type: String, default: null },
  payload: { type: String, required: true },
  last_activity: { type: Number, required: true },
});

export const Session = mongoose.model<ISession>('Session', SessionSchema);
