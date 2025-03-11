import mongoose, { Schema, Document } from 'mongoose';

export interface IEggMount extends Document {
  egg_id: mongoose.Types.ObjectId;
  mount_id: mongoose.Types.ObjectId;
}

const EggMountSchema: Schema = new Schema(
  {
    egg_id: { type: Schema.Types.ObjectId, ref: 'Egg', required: true },
    mount_id: { type: Schema.Types.ObjectId, ref: 'Mount', required: true },
  },
  { _id: false } // composite key, no auto _id
);

export const EggMount = mongoose.model<IEggMount>('EggMount', EggMountSchema);
