import { SaleDetailModel } from "./saledetail.model";

export interface SaleModel {
    id: number;
    clientId: number;
    totalValue: number;
    saleDate: Date;
    saleDetails: SaleDetailModel[];
}