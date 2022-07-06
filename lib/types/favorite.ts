import { IProduct } from "./products";
export interface IFavorite {
  items: IProduct[];
}

export interface IFavoriteRootState {
  favorite: IFavorite;
}
