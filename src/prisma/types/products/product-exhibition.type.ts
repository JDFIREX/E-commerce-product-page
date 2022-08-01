import { CollectionEnum } from "./collection.enum";
import { ProductType } from "./product.type";

export type ProductExhibitionType = {
    id: number,
    title: string,
    description: string,
    collection: CollectionEnum,
    product_created: Date,
    discount: boolean,
    discount_percent: number,
    magazine: ProductType[]
};