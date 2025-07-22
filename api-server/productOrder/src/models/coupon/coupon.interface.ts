export interface ICoupon {
    code: string;
    discountType: CouponDiscountType;
    discountValue: number;
    minOrderAmount?: number;
    maxDiscountAmount?: number;
    startDate: Date;
    endDate: Date;
    products?: string[];
    category?: string[];
    subCategory?: string[];
    subSubCategory?: string[];
    usageLimit: number;
    usedCount?: number;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export enum CouponDiscountType {
    Percentage = 'percentage',
    Fixed = 'fixed',
}