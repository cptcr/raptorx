import mongoose, { Schema, Document } from 'mongoose';

export interface IMigration extends Document {
  migration: string;
  batch: number;
}

const MigrationSchema: Schema = new Schema({
  migration: { type: String, required: true },
  batch: { type: Number, required: true },
});

export const Migration = mongoose.model<IMigration>('Migration', MigrationSchema);
