import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../hooks/useLanguage";
import { urlFor } from "../../../lib/client";
import { IProduct } from "../../../lib/types/products";
import {
  gbpCurrencyFormat,
  irrCurrencyFormat,
} from "../../../utilities/currencyFormat";

interface Props {
  product: IProduct;
}

const CarouselBoxCard: React.FC<Props> = ({ product }) => {
  const { locale } = useLanguage();

  return (
    <div className="w-full px-2 my-2">
      <div className="w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
        <div className="text-center">
          {product?.image[0] && (
            <Image
              src={urlFor(product?.image[0]).url()}
              alt="laptop image"
              width={200}
              height={185}
              className="object-contain hover:scale-105 transition-transform !p-2"
            />
          )}
          <span className="block absolute -top-2 -right-2">
            <Image
              src="/images/discount-icon/discount.png"
              width={40}
              height={40}
              alt="discount-icon"
            />
          </span>
        </div>
        <p className="truncate">{product?.name}</p>
        <span>
          <del className="text-[12px] md:text-sm text-rose-600">
            <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
            {locale === "en"
              ? gbpCurrencyFormat(product?.price)
              : irrCurrencyFormat(product?.irrprice)}
            <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
          </del>
          {product?.discount ? (
            <>
              <br />
              <ins className="text-sm md:text-[16px] font-bold self-end mt-6 ">
                <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                {locale === "en"
                  ? gbpCurrencyFormat(product?.discount)
                  : irrCurrencyFormat(product?.irrdiscount)}
                <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
              </ins>
            </>
          ) : null}
        </span>
      </div>
    </div>
  );
};

export default CarouselBoxCard;
