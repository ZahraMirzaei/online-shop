import React, { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { IProduct } from "../../lib/types/products";
import SubmenuCategory from "./SubmenuCategory";
import Card from "../UI/card/Card";
import Breadcrumb from "../UI/Breadcrumb";
import Sort from "./Sort";
import { useDispatch } from "react-redux";
import { SortedProductsListActions } from "../../store/sortedProductList-slice";
import { useRouter } from "next/router";

interface Props {
  productList: IProduct[];
}
const ProductList: React.FC<Props> = ({ productList }) => {
  const router = useRouter();
  const { t } = useLanguage();
  let isInNewestProductsPage =
    router.pathname === "/newestProducts" ? true : false;

  const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SortedProductsListActions.sortProductsList({
        productsList: productList,
        sortBasedOn: selectedRadioBtn,
      })
    );
  }, [dispatch, productList, selectedRadioBtn]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadioBtn(e.currentTarget.id);
  }
  console.log(productList);

  return (
    <div>
      <Breadcrumb />
      <SubmenuCategory />
      {isInNewestProductsPage && productList.length ? (
        <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 max-w-[1700px] mx-auto">
          {productList
            ? productList.map((product: IProduct) => {
                return <Card key={product.slug.current} product={product} />;
              })
            : null}
        </div>
      ) : productList.length ? (
        <div>
          <Sort
            selectedBtn={selectedRadioBtn}
            onChangeSelectedBtn={onChangeHandler}
          />
          <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 max-w-[1700px] mx-auto">
            {productList
              ? productList.map((product: IProduct) => {
                  return <Card key={product.slug.current} product={product} />;
                })
              : null}
          </div>
        </div>
      ) : (
        <p className="text-palette-mute text-center mt-8">{t.noProduct}</p>
      )}
    </div>
  );
};

export default ProductList;
