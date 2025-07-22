import { ICoupon } from '../coupon/coupon.interface';

export interface IOrderItem {
    productId: string;
    name: string;
    description: string;
    price: string;
    mrp: string;
    quantity: number;
    imageUrl: string,
    categoryId: string,
    subCategoryId: string,
    subSubCategoryId: string
}

export interface IOrder {
    userId: string;
    items: IOrderItem[];
    totalAmount: number;
    discountAmount?: number;
    status: OrderStatus;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    address: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export enum OrderStatus {
    Pending = 'pending',
    Confirmed = 'confirmed',
    Shipped = 'shipped',
    Delivered = 'delivered',
    Cancelled = 'cancelled',
}

export enum PaymentMethod {
    COD = 'cod',
    Online = 'online',
}

export enum PaymentStatus {
    Pending = 'pending',
    Paid = 'paid',
    Failed = 'failed',
}
