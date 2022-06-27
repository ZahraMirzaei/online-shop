export const calculateDiscountPercentage = (
  price: number,
  discountPercentage: number
) => {
  return price - price * (discountPercentage * 0.01);
};
