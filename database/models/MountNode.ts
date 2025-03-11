import mongoose, { Schema, Document } from 'mongoose';

export interface IMountNode extends Document {
  node_id: mongoose.Types.ObjectId;
  mount_id: mongoose.Types.ObjectId;
}

const MountNodeSchema: Schema = new Schema(
  {
    node_id: { type: Schema.Types.ObjectId, ref: 'Node', required: true },
    mount_id: { type: Schema.Types.ObjectId, ref: 'Mount', required: true },
  },
  { _id: false }
);

export const MountNode = mongoose.model<IMountNode>('MountNode', MountNodeSchema);
