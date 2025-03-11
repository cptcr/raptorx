import mongoose, { Schema, Document } from 'mongoose';

export interface IRecoveryToken extends Document {
  user_id: mongoose.Types.ObjectId;
  token: string;
  created_at?: Date;
}

const RecoveryTokenSchema: Schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  token: { type: String, required: true },
  created_at: { type: Date, default: null },
});

export const RecoveryToken = mongoose.model<IRecoveryToken>('RecoveryToken', RecoveryTokenSchema);
