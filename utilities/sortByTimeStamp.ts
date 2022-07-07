import { IProduct } from "../lib/types/products";

export function getTimeStamp(date: string) {
  const creationProductDate = new Date(date);
  return creationProductDate.getTime();
}

export const sortByTimeStamp = (
  product1: IProduct,
  product2: IProduct
): number => {
  if (product2?.timeStamp && product1?.timeStamp) {
    return product2?.timeStamp - product1?.timeStamp;
  }
  return 0;
};

export const newestProductsFn = (products: IProduct[]) => {
  const productsWithTimeStamp = products.map((product) => {
    return {
      ...product,
      timeStamp: getTimeStamp(product.registerDate!),
    };
  });
  return productsWithTimeStamp.sort(sortByTimeStamp);
};
