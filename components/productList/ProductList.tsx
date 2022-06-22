import React from "react";
import { IProduct } from "../../lib/types/products";
import SubmenuCategory from "./SubmenuCategory";
import Card from "../UI/card/Card";
import Breadcrumb from "../UI/Breadcrumb";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  productList: IProduct[];
}
const ProductList: React.FC<Props> = ({ productList }) => {
  const { t } = useLanguage();
  return (
    <div>
      <Breadcrumb />
      <SubmenuCategory />
      {productList?.length ? (
        <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 max-w-[1700px]">
          {productList
            ? productList.map((product) => {
                return (
                  <Card
                    key={product.slug.current}
                    product={product}
                    href={`/`}
                  />
                );
              })
            : null}
        </div>
      ) : (
        <p className="text-palette-mute text-center mt-8">{t.noProduct}</p>
      )}
    </div>
  );
};

export default ProductList;
