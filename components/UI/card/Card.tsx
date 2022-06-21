import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";
import StarRatingComponent from "react-star-rating-component";
import { IProduct } from "../../../lib/types/products";
import { urlFor } from "../../../lib/client";
import {
  gbpCurrencyFormat,
  irrCurrencyFormat,
} from "../../../utilities/currencyFormat";
import CardActions from "./CardActions";

interface Props {
  href: string;
  product: IProduct;
}

const Card: React.FC<Props> = ({ href, product }) => {
  const { locale } = useLanguage();
  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-palette-card rounded-xl flex">
      <Link href={href}>
        <a className="flex md:items-center md:flex-col relative w-full">
          <div className="w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center">
            <Image
              src={urlFor(product?.image[0]).url()}
              width={280}
              height={300}
              alt={product.name}
              className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2"
            />
            {product?.discount ? (
              <span className="w-8 sm:w-auto block absolute -top-2 -right-2">
                <Image
                  src="/images/discount-icon/discount.png"
                  width={40}
                  height={40}
                  alt="discount-icon"
                />
              </span>
            ) : null}
            <CardActions />
          </div>
          <div className="flex flex-col justify-between  flex-grow  w-[90%]  px-1 md:px-3 py-2 md:py-4">
            <div className="flex justify-center flex-col  flex-grow overflow-hidden">
              <div className="self-center">
                <StarRatingComponent
                  name="product_rate"
                  starCount={5}
                  value={product.starRating}
                  starColor={"gold"}
                  emptyStarColor={"gray"}
                />
              </div>
              <h4 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute  ">
                {product.name}
              </h4>
            </div>
            <div className=" ltr:self-start rtl:self-end mt-4 text-left">
              {product?.discount ? (
                <span className="flex flex-col">
                  <del className="text-[10px] md:text-sm text-rose-600">
                    <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                    {locale === "en"
                      ? gbpCurrencyFormat(product?.price)
                      : irrCurrencyFormat(product?.irrprice)}

                    <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                  </del>
                  <ins className="text-base md:text-[16px] font-bold self-end">
                    <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                    {locale === "en"
                      ? gbpCurrencyFormat(product?.discount)
                      : irrCurrencyFormat(product?.irrdiscount)}
                    <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                  </ins>
                </span>
              ) : (
                <span className="font-bold underline">
                  <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                  {locale === "en"
                    ? gbpCurrencyFormat(product?.price)
                    : irrCurrencyFormat(product?.irrprice)}
                  <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
                </span>
              )}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
