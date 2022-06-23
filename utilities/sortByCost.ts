import { IProduct } from "../lib/types/products";

export const sortByExpensive = (
  product1: IProduct,
  product2: IProduct
): number => {
  return product2.price - product1.price;
};

export const sortByCheapest = (
  product1: IProduct,
  product2: IProduct
): number => {
  return product1.price - product2.price;
};
