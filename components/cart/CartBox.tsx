import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../hooks/useLanguage";
import { ICartRootState } from "../../lib/types/cart";
import { changeNumbersFormatEnToFa } from "../../utilities/changeNumbersFormatEnToFa";

const CartBox = () => {
  const { t } = useLanguage();
  const dispatch = useDispatch();
  const cartItemQuantity = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );
  const cartItems = useSelector((state: ICartRootState) => {
    state.cart.items;
  });
  return (
    <div className="flex flex-col absolute top-full rtl:left-0 ltr:right-0 h-[10rem] w-[20rem] bg-palette-card z-[110] shadow-md rounded-lg">
      <header className="flex items-center justify-between text-sm font-normal p-4">
        <span>
          {changeNumbersFormatEnToFa(cartItemQuantity)} {t.product}
        </span>
        <Link href="/">
          <a className="text-cyan-500">{t.seeCart}</a>
        </Link>{" "}
      </header>
    </div>
  );
};

export default CartBox;
