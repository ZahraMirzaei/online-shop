import React from "react";
import { IProduct } from "../../lib/types/products";
import Breadcrumb from "../UI/Breadcrumb";

interface Props {
  product: IProduct;
  products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product, products }) => {
  return (
    <div>
      <Breadcrumb />
      {product.name}
    </div>
  );
};

export default ProductDetails;
