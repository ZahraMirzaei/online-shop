import { IProduct } from "../lib/types/products";

export const sortByPoPularity = (
  product1: IProduct,
  product2: IProduct
): number => {
  return product2.starRating - product1.starRating;
};
