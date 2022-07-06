export interface IFavoriteItem {
  slug: string;
  name: string;
  image: any;
  brand: string;
  category: string[];
  price: number;
  discount?: number;
}

export interface IFavorite {
  items: IFavoriteItem[];
}

export interface IFavoriteRootState {
  favorite: IFavorite;
}
