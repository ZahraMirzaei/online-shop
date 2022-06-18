import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import StarRatingComponent from "react-star-rating-component";
import { IProduct } from "../../lib/interface/products";
import { urlFor } from "../../lib/client";
import {
  gbpCurrencyFormat,
  irrCurrencyFormat,
} from "./CarouselBox/CarouselBoxCard";

interface Props {
  href: string;
  product: IProduct;
}

const Card: React.FC<Props> = ({ href, product }) => {
  const { t, locale } = useLanguage();
  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-2 shadow-xl my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-palette-card rounded-xl">
      <Link href={href}>
        <a className="flex md:items-center md:flex-col relative">
          <div className="w-full bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none">
            <Image
              src={urlFor(product?.image[0]).url()}
              width={280}
              height={300}
              alt={product.name}
              className=" drop-shadow-xl object-contain hover:scale-110 transition-transform !py-2"
            />
            {product?.discount ? (
              <span className="block absolute -top-2 -right-2">
                <Image
                  src="/images/discount-icon/discount.png"
                  width={40}
                  height={40}
                  alt="discount-icon"
                />
              </span>
            ) : null}
            <div className="md:w-auto md:h-[130px] mt-2 p-2 flex md:flex-col justify-around self-center md:absolute bottom-0 md:bottom-auto md:-top-2 left-0  md:-left-1 rounded-lg md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-palette-card/20">
              <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
                <AiOutlineHeart style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
                <IoShareSocialOutline style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
                <AiOutlineShoppingCart style={{ fontSize: "1.2rem" }} />
              </div>
            </div>
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
              <h4 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute md:h-10">
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
