import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/cartUi-slice";
import { useLanguage } from "../../hooks/useLanguage";
import { ICartRootState } from "../../lib/types/cart";
import { changeNumbersFormatEnToFa } from "../../utilities/changeNumbersFormatEnToFa";
import { gbpCurrencyFormat } from "../../utilities/currencyFormat";
import { ICartProduct } from "../../lib/types/cart";
import CartItem from "./CartItem";
import { useExchangeRateGBPToIRR } from "../../hooks/useExchangeRateGBPToIRR";

const CartBox = () => {
  const { t, locale } = useLanguage();
  const dispatch = useDispatch();

  const cartItemQuantity = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );

  const cartTotalAmount = useSelector(
    (state: ICartRootState) => state.cart.totalAmount
  );

  const cartItems: ICartProduct[] = useSelector(
    (state: ICartRootState): ICartProduct[] => {
      return state.cart.items;
    }
  );

  function onSeeCartClickHandler() {
    dispatch(cartUiActions.toggleCartBox(false));
  }

  const irPrice = useExchangeRateGBPToIRR(cartTotalAmount);

  return (
    <div className="hidden lg:flex flex-col absolute top-full rtl:left-0 ltr:right-0 min-h-[15rem] max-h-[25rem] w-[20rem] bg-palette-card z-[110] shadow-md rounded-lg overflow-auto">
      <div className="relative">
        <header className="flex items-center justify-between sticky top-0 left-0 right-0 text-sm font-normal z-10 bg-palette-card p-2">
          <span>
            {locale === "en"
              ? cartItemQuantity
              : changeNumbersFormatEnToFa(cartItemQuantity)}{" "}
            {t.product}
          </span>
          <span onClick={onSeeCartClickHandler}>
            <Link href="/cart">
              <a className="text-cyan-500">{t.seeCart}</a>
            </Link>
          </span>
        </header>
        <hr className="mt-2" />
        <div>
          <>
            {cartItems.length ? (
              cartItems.map((item) => {
                return <CartItem key={item.slug.current} product={item} />;
              })
            ) : (
              <p className="mt-20 text-center text-palette-mute font-normal">
                {t.cartIsEmpty}
              </p>
            )}
          </>
        </div>
        {cartItems.length ? (
          <div className="flex items-center sticky bottom-0 left-0 right-0 bg-palette-card font-normal py-3 px-4">
            <div className="flex flex-col flex-grow ltr:mr-2 rtl:ml-2">
              <p className="text-sm">{t.payableAmount}</p>
              <p className="self-end text-sm font-bold">
                {locale === "en"
                  ? `£ ${gbpCurrencyFormat(cartTotalAmount)}`
                  : `تومان ${irPrice}`}
              </p>
            </div>
            <Link href={"/"}>
              <a className="py-2 px-3 bg-palette-primary text-[12px] text-palette-side rounded-lg">
                {t.loginAndOrder}
              </a>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartBox;
