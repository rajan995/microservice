import { ICategory, ISubCategory, ISubSubCategory } from "../category/category.interface";
import { IProductImage } from "../productImage/productImage.interface";

export interface IProduct{
    name: string;
    description?: string;
    price: number;
    mrp: number; 
    stock: number;
    categoryId: ICategory; 
    subCategoryId?: ISubCategory; 
    subSubCategoryId?:ISubSubCategory;
    images?: IProductImage[]; 
    isActive?: boolean; 
    createdAt?: Date; 
    updatedAt?: Date; 
}