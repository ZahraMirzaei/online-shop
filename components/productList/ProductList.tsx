import React, { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { IProduct } from "../../lib/types/products";
import SubmenuCategory from "./SubmenuCategory";
import Card from "../UI/card/Card";
import Breadcrumb from "../UI/Breadcrumb";
import Sort from "./Sort";
import { useDispatch, useSelector } from "react-redux";
import { SortedProductsListActions } from "../../store/sortedProductList-slice";
import { useRouter } from "next/router";
import { IProductListRootState } from "../../lib/types/productList";

interface Props {
  productList: IProduct[];
}
const ProductList: React.FC<Props> = ({ productList }) => {
  const router = useRouter();
  const { t } = useLanguage();
  const firstSortBased =
    router.pathname === "/newestProducts" ? "newestProducts" : "all";
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(firstSortBased);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SortedProductsListActions.sortProductsList({
        productsList: productList,
        sortBasedOn: selectedRadioBtn,
      })
    );
  }, [dispatch, productList, selectedRadioBtn]);

  const productsSortedList = useSelector(
    (state: IProductListRootState) => state.sortedProductsList.productsList
  );

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadioBtn(e.currentTarget.id);
  }

  return (
    <div>
      <Breadcrumb />
      <SubmenuCategory />
      {productsSortedList.length ? (
        <div>
          <Sort
            selectedBtn={selectedRadioBtn}
            onChangeSelectedBtn={onChangeHandler}
          />
          <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 max-w-[1700px] mx-auto">
            {productsSortedList
              ? productsSortedList.map((product: IProduct) => {
                  return <Card key={product.slug.current} product={product} />;
                })
              : null}
          </div>
        </div>
      ) : productList?.length ? (
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
