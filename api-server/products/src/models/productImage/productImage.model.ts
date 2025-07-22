import { IProductImage } from "./productImage.interface";

import mongoose, { Schema, Document, models, model } from 'mongoose';
const ProductImageSchema: Schema = new Schema<IProductImage>(
  {
    name: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);
export const ProductImageModel = models.ProductImage || model<IProductImage>('ProductImage', ProductImageSchema);