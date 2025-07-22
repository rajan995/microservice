import { Schema, model, Document, Types } from 'mongoose';
import { OrderStatus, PaymentMethod, PaymentStatus, IOrder, IOrderItem } from './order.model';

export interface IOrderDocument extends IOrder, Document { }

const OrderItemSchema = new Schema<IOrderItem>({
    productId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    mrp: { type: String, required: true },
    quantity: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    categoryId: { type: String, required: true },
    subCategoryId: { type: String, required: true },
    subSubCategoryId: { type: String, required: true }
});

const OrderSchema = new Schema<IOrderDocument>({
    userId: { type: String, required: true },
    items: { type: [OrderItemSchema], required: true },
    totalAmount: { type: Number, required: true },
    discountAmount: { type: Number },
    status: { type: String, enum: Object.values(OrderStatus), default: OrderStatus.Pending },
    paymentMethod: { type: String, enum: Object.values(PaymentMethod), required: true },
    paymentStatus: { type: String, enum: Object.values(PaymentStatus), default: PaymentStatus.Pending },
    address: { type: String, required: true },
}, { timestamps: true });

export const OrderModel = model<IOrderDocument>('Order', OrderSchema);
