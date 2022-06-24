import React from "react";
import { IProduct } from "../../lib/types/products";

interface Props {
  product: IProduct;
}
const DetailsSection: React.FC<Props> = ({ product }) => {
  return <div>DetailsSection</div>;
};

export default DetailsSection;
