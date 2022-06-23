import { IProduct } from "../lib/types/products";

export const sortByPoPularity = (
  product1: IProduct,
  product2: IProduct
): number => {
  return product1.starRating - product2.starRating;
};
