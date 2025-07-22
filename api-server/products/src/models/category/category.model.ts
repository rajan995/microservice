import { ICategory, ISubCategory, ISubSubCategory } from "./category.interface";
import { Schema, models, model } from 'mongoose';

const CategorySchema: Schema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String },
    image: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const CategoryModel = models.User || model('Category', CategorySchema);


const SubCategorySchema: Schema = new Schema<ISubCategory>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    image: { type: String },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const SubCategoryModel = models.SubCategory || model('SubCategory', SubCategorySchema);


const SubSubCategorySchema: Schema = new Schema<ISubSubCategory>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    image: { type: String },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    subCategoryId: { type: Schema.Types.ObjectId, ref: 'SubCategory', required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const SubSubCategoryModel = models.SubSubCategory || model('SubSubCategory', SubSubCategorySchema);