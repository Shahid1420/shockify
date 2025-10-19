import mongoose, { Schema, Document } from 'mongoose';

export interface IUserMeta extends Document {
  userId: mongoose.Types.ObjectId;
  investmentGoals?: string,
  riskTolerance?: string,
  preferredIndustry?: string,
  country?: string,
}

const UserMetaSchema = new Schema<IUserMeta>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  investmentGoals: String,
  riskTolerance: String,
  preferredIndustry: String,
  country: String,
}, {
  timestamps: true,
});

const UserMeta = mongoose.models.UserMeta || mongoose.model<IUserMeta>('UserMeta', UserMetaSchema);
export default UserMeta;
