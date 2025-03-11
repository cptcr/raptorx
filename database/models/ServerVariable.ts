import mongoose, { Schema, Document } from 'mongoose';

export interface IServerVariable extends Document {
  server_id?: mongoose.Types.ObjectId;
  variable_id: mongoose.Types.ObjectId;
  variable_value: string;
  created_at?: Date;
  updated_at?: Date;
}

const ServerVariableSchema: Schema = new Schema({
  server_id: { type: Schema.Types.ObjectId, ref: 'Server', default: null },
  variable_id: { type: Schema.Types.ObjectId, ref: 'EggVariable', required: true },
  variable_value: { type: String, required: true },
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export const ServerVariable = mongoose.model<IServerVariable>('ServerVariable', ServerVariableSchema);
