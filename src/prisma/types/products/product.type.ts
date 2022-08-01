import { SizeEnum } from "./size.enum";

export type ProductType = {
    id: number,
    exhibitionId: number,
    size: SizeEnum,
    price: number,
    isAvailable: boolean,
    orderId: number
};