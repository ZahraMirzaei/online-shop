import React from "react";
import { useSelector } from "react-redux";
import { useLanguage } from "../../hooks/useLanguage";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Link from "next/link";
import Card from "../UI/card/Card";
import { IProduct } from "../../lib/types/products";

const Newest = () => {
  const { t } = useLanguage();
  const { width } = useWindowDimensions();
  let numProductToShow = width >= 1536 ? 12 : 8;

  const newestProducts: IProduct[] = useSelector(
    (state: any) => state.newestProductsList.productsList
  );

  return (
    <div className="my-4 mx-auto lg:my-10 flex flex-col max-w-[1650px]">
      <h2 className="mt-4 mx-auto py-8 md:text-xl lg:text-2xl">{t.newest}</h2>

      <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 max-w-[1700px]">
        {newestProducts
          ? newestProducts
              .slice(0, numProductToShow)
              .map((product: IProduct) => {
                return <Card key={product.name} product={product} />;
              })
          : null}
      </div>

      <div className="text-center">
        <Link href="/newestProducts">
          <a className="inline-block py-3 px-8 md:px-12 my-4 text-sm md:text-base bg-palette-primary text-palette-side rounded-xl shadow-lg">
            {t.seeAllNewProducts}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Newest;
