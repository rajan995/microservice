import mongoose, { Schema, Document } from 'mongoose';
import { IReview } from './review.interface';
const ReviewSchema: Schema = new Schema<IReview>(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, required: true },  // Optional if you always fetch from user service
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
  },
  { timestamps: true }
);
export const ReviewModel = mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);