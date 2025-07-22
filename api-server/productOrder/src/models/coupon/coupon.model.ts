import { Schema, model, Document } from 'mongoose';
import { CouponDiscountType, ICoupon } from './coupon.interface';

export interface ICouponDocument extends ICoupon, Document { }

const CouponSchema = new Schema<ICouponDocument>({
    code: { type: String, required: true, unique: true },
    discountType: { type: String, enum: CouponDiscountType, required: true },
    discountValue: { type: Number, required: true },
    minOrderAmount: { type: Number },
    maxDiscountAmount: { type: Number },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    products: [{ type: String }],
    category: [{ type: String }],
    subCategory: [{ type: String }],
    subSubCategory: [{ type: String }],
    usageLimit: { type: Number, required: true },
    usedCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const CouponModel = model<ICouponDocument>('Coupon', CouponSchema);
