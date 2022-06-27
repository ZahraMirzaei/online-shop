import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMinusSm, HiOutlinePlusSm, HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useExchangeRateGBPToIRR } from "../../hooks/useExchangeRateGBPToIRR";
import { useLanguage } from "../../hooks/useLanguage";
import { urlFor } from "../../lib/client";
import { ICartProduct } from "../../lib/types/cart";
import { cartActions } from "../../store/cart-slice";
import { gbpCurrencyFormat } from "../../utilities/currencyFormat";

interface Props {
  product: ICartProduct;
}
const CartItem: React.FC<Props> = ({ product }) => {
  const [counter, setCounter] = useState(product.quantity);
  const dispatch = useDispatch();
  const { t, locale } = useLanguage();
  const irPrice = useExchangeRateGBPToIRR(product.totalPrice);

  function increment(product: ICartProduct) {
    setCounter((prev) => ++prev);
    dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
  }

  function decrement(slug: string) {
    setCounter((prev) => --prev);
    dispatch(cartActions.removeItemFromCart(slug));
  }

  const productInfoAddToCart = {
    image: product.image,
    name: product.name,
    slug: product.slug,
    price: product.price,
    discount: product.discount ? product.discount : undefined,
    brand: product.brand,
    category: product.category,
    starRating: product.starRating,
    quantity: 1,
    totalPrice: product.price,
  };

  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
      setCounter(+e.currentTarget.value);
    }
  }
  return (
    <div className="my-4 py-4 px-2 border-b-2">
      <Link
        href={`/${product.category[0]}/${product.category[1]}/${product.brand}/${product.slug.current}`}
      >
        <a className="flex items-center">
          <div>
            <Image
              src={urlFor(product?.image[0]).url()}
              width={200}
              height={200}
              alt={product.name}
              className="object-contain"
            />
          </div>
          <div
            className="text-sm font-normal self-start w-[60%]"
            style={{ direction: "ltr" }}
          >
            {product.name}
          </div>
        </a>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center justify-between cursor-pointer">
          <div className="p-2" onClick={() => increment(productInfoAddToCart)}>
            <HiOutlinePlusSm style={{ fontSize: "1rem" }} />
          </div>
          <input
            className="inline-block w-[65px] rtl:pr-7 ltr:pl-7 py-2 mx-1 border-[1px] border-gray-400"
            type="number"
            min={1}
            max={10}
            value={counter}
            onChange={onInputNumberChangeHandler}
          />
          {counter === 1 ? (
            <div
              onClick={() => decrement(product.slug.current)}
              className="p-1"
            >
              <HiOutlineTrash style={{ fontSize: "1.3rem", color: "red" }} />
            </div>
          ) : (
            <div
              onClick={() => decrement(product.slug.current)}
              className="p-1"
            >
              <HiMinusSm style={{ fontSize: "1rem" }} />
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow font-normal">
          <p className="ltr:ml-4 rtl:mr-4">{t.totalAmount}</p>
          <p className="self-end font-bold">
            {locale === "en"
              ? `£ ${gbpCurrencyFormat(product.totalPrice * counter)}`
              : `تومان ${irPrice}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
