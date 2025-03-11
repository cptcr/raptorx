import mongoose, { Schema, Document } from 'mongoose';

export interface ISubuser extends Document {
  user_id: mongoose.Types.ObjectId;
  server_id: mongoose.Types.ObjectId;
  permissions?: any;
  created_at?: Date;
  updated_at?: Date;
}

const SubuserSchema: Schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  server_id: { type: Schema.Types.ObjectId, ref: 'Server', required: true },
  permissions: { type: Schema.Types.Mixed, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const Subuser = mongoose.model<ISubuser>('Subuser', SubuserSchema);
