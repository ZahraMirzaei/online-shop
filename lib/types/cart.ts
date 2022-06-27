import { TSlug } from "./products";

export interface ICartProduct {
  image: any;
  name: string;
  slug: TSlug;
  price: number;
  discount?: number;
  brand: string;
  category: string[];
  starRating: number;
  quantity: number;
  totalPrice: number;
}

export interface ICartUI {
  cartBoxIsVisible: boolean;
  cartPageIsVisible: boolean;
}

export interface ICart {
  items: ICartProduct[];
  totalQuantity: number;
  totalAmount: number;
}

//RootState => use for state in useSelector

export interface ICartUiRootState {
  cartUi: ICartUI;
}
export interface ICartRootState {
  cart: ICart;
}
