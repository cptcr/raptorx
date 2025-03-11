import mongoose, { Schema, Document } from 'mongoose';

export interface IActivityLogSubject extends Document {
  activity_log_id: mongoose.Types.ObjectId;
  subject_type: string;
  subject_id: number;
}

const ActivityLogSubjectSchema: Schema = new Schema({
  activity_log_id: { type: Schema.Types.ObjectId, ref: 'ActivityLog', required: true },
  subject_type: { type: String, required: true },
  subject_id: { type: Number, required: true },
});

export const ActivityLogSubject = mongoose.model<IActivityLogSubject>('ActivityLogSubject', ActivityLogSubjectSchema);