import React from "react";
import { IProduct } from "../../lib/types/products";
import Breadcrumb from "../UI/Breadcrumb";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";

interface Props {
  product: IProduct;
  products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product, products }) => {
  return (
    <div className="flex flex-col">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row flex-wrap items-center">
        <ImageSection imgArray={product.image} />
        <DetailsSection product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
