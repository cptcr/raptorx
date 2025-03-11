import mongoose, { Schema, Document } from 'mongoose';

export interface IEggVariable extends Document {
  egg_id: mongoose.Types.ObjectId;
  name: string;
  description: string;
  env_variable: string;
  default_value: string;
  user_viewable: boolean;
  user_editable: boolean;
  rules?: string;
  created_at?: Date;
  updated_at?: Date;
}

const EggVariableSchema: Schema = new Schema({
  egg_id: { type: Schema.Types.ObjectId, ref: 'Egg', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  env_variable: { type: String, required: true },
  default_value: { type: String, required: true },
  user_viewable: { type: Boolean, required: true },
  user_editable: { type: Boolean, required: true },
  rules: { type: String, default: null },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const EggVariable = mongoose.model<IEggVariable>('EggVariable', EggVariableSchema);
