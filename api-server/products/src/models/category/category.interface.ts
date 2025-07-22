import mongoose, { Document } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    description?: string;
    image?: string; // Optional category image
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ISubCategory extends Document {
    name: string;
    description?: string;
    image?: string;
    categoryId: mongoose.Types.ObjectId;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}


export interface ISubSubCategory extends Document {
    name: string;
    description?: string;
    image?: string;
    categoryId: mongoose.Types.ObjectId;
    subCategoryId: mongoose.Types.ObjectId;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
