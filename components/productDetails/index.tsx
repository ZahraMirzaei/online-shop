import React from "react";
import { IProduct } from "../../lib/types/products";
import Breadcrumb from "../UI/Breadcrumb";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import Benefits from "../Benefits";
import SimilarProducts from "./SimilarProducts";

interface Props {
  product: IProduct;
  products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product, products }) => {
  const similarProductsList = products
    .filter(
      (similarProduct) => similarProduct.slug.current !== product.slug.current
    )
    .slice(0, 10);

  return (
    <div className="flex flex-col max-w-[1500px] mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
        <ImageSection imgArray={product.image} product={product} />
        <DetailsSection product={product} />
      </div>
      <div className="border-2 my-8">
        <Benefits />
      </div>
      <SimilarProducts products={similarProductsList} />
    </div>
  );
};

export default ProductDetails;
