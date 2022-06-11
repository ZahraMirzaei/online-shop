import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";
import { urlFor } from "../../../lib/client";
import { IProduct } from "../../../lib/interface/products";

interface Props {
  product: IProduct;
}

//exchangerate-api.com for convert currency pound to riyal
const APIKEY = "230967b967bfa5f86ca99d6c";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/GBP/IRR`;

const CarouselBoxCard: React.FC<Props> = ({ product }) => {
  const { locale } = useLanguage();
  const [IRRPrice, setIRRPrice] = useState<string>();
  const [IRRDiscount, setIRRDiscount] = useState<string>();

  {
    /*useEffects do its job just if locale === 'fa' */
  }
  useEffect(() => {
    if (locale === "fa" && product?.price) {
      fetch(`${BASE_URL}/${product?.price}`)
        .then((res) => res.json())
        .then((data) => {
          let roundedNum = Math.trunc(data.conversion_result); //remove float part of price
          let formattedPrice = new Intl.NumberFormat("fa-IR").format(
            //convert to farsi format
            roundedNum
          );
          setIRRPrice(formattedPrice);
        });
    }
  }, [locale, product?.price]);
  useEffect(() => {
    if (locale === "fa" && product?.discount) {
      fetch(`${BASE_URL}/${product?.discount}`)
        .then((res) => res.json())
        .then((data) => {
          let roundedNum = Math.trunc(data.conversion_result);
          let formattedDiscount = new Intl.NumberFormat("fa-IR").format(
            roundedNum
          );
          setIRRDiscount(formattedDiscount);
        });
    }
  }, [locale, product?.discount]);

  return (
    <div className="w-full px-2 my-2">
      <div className="w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
        {product?.image[0] && (
          <Image
            src={urlFor(product?.image[0]).url()}
            alt="laptop image"
            width={200}
            height={185}
            className="object-contain hover:scale-105 transition-transform"
          />
        )}
        <p className="truncate">{product?.name}</p>
        <span>
          <del className="text-sm text-rose-600">
            <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
            {product?.price
              ? locale === "fa"
                ? IRRPrice
                : product?.price
              : null}
            <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
          </del>
          {product?.discount && (
            <>
              <br />
              <ins className="text-[16px]  self-end mt-6 font-bold">
                <sup className="mr-1">{locale === "en" ? "£" : ""}</sup>
                {product?.discount
                  ? locale === "fa"
                    ? IRRDiscount
                    : product?.discount
                  : null}
                <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
              </ins>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default CarouselBoxCard;
