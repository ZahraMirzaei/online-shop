import React from "react";
import Image from "next/image";
import { useLanguage } from "../../../hooks/useLanguage";
import { urlFor } from "../../../lib/client";
import { IProduct } from "../../../lib/types/products";
import {
  gbpCurrencyFormat,
  irrCurrencyFormat,
} from "../../../utilities/currencyFormat";
import Link from "next/link";

interface Props {
  product: IProduct;
}

const CarouselBoxCard: React.FC<Props> = ({ product }) => {
  const { locale } = useLanguage();

  return (
    <div className="w-full px-2 my-2">
      <Link
        href={`/${product.category[0]}/${product.category[1]}/${product.brand}/${product.slug.current}`}
      >
        <a className="flex flex-col w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
          <div className="text-center flex-grow">
            {product?.image[0] && (
              <Image
                src={urlFor(product?.image[0]).url()}
                alt="laptop image"
                width={200}
                height={185}
                className="object-contain hover:scale-105 transition-transform !p-2"
              />
            )}
            {product.isOffer ? (
              <span className="block absolute -top-2 -right-2">
                <Image
                  src="/images/discount-icon/discount.png"
                  width={40}
                  height={40}
                  alt="discount-icon"
                />
              </span>
            ) : null}
          </div>
          <p className="truncate">{product?.name}</p>
          <div className="w-full ltr:self-start rtl:self-end mt-4 text-left">
            {product?.discount ? (
              <span className="flex flex-col">
                <del className="text-[12px] md:text-sm text-rose-600 ">
                  <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                  {locale === "en"
                    ? gbpCurrencyFormat(product?.price)
                    : irrCurrencyFormat(product?.irrprice)}

                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </del>
                <ins className="text-base md:text-[16px] font-bold">
                  <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                  {locale === "en"
                    ? gbpCurrencyFormat(product?.discount)
                    : irrCurrencyFormat(product?.irrdiscount)}
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </ins>
              </span>
            ) : (
              <span className="font-bold underline">
                <span className="block h-5"></span>
                <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                {locale === "en"
                  ? gbpCurrencyFormat(product?.price)
                  : irrCurrencyFormat(product?.irrprice)}
                <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
              </span>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CarouselBoxCard;
