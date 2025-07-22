import { IProduct } from "./product.interface";
import { Schema, models, model } from 'mongoose';
const ProductSchema: Schema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: false },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    subCategoryId: { type: Schema.Types.ObjectId, ref: 'SubCategory' ,required:true},
    subSubCategoryId: { type: Schema.Types.ObjectId, ref: 'SubSubCategory' ,required:true},
    images:[{ type: Schema.Types.ObjectId, ref: 'ProductImage' }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);


export const ProductModel = models.Product || model<IProduct>('Product', ProductSchema);