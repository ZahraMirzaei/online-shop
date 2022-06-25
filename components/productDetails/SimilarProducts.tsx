import React from "react";
import { IProduct } from "../../lib/types/products";
import Card from "../UI/card/Card";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {products.slice(0, 10).map((product) => (
          <CarouselBoxCard key={product.slug.current} product={product} />
        ))}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
