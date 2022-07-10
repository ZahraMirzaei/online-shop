import { IProduct } from "./products";

export interface IProductList {
  productsList: IProduct[] | [];
}

export interface IProductListRootState {
  sortedProductsList: IProductList;
}
