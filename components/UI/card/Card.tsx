import React from "react";
import Image from "next/image";
import Link from "next/link";
import StarRatingComponent from "react-star-rating-component";
import { IProduct } from "../../../lib/types/products";
import { urlFor } from "../../../lib/client";
import CardActions from "./CardActions";
import ProductPrice from "../ProductPrice";

interface Props {
  product: IProduct;
}

const Card: React.FC<Props> = ({ product }) => {
  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-palette-card rounded-xl flex relative">
      <Link
        href={`/${product.category[0]}/${product.category[1]}/${product.category[2]}/${product.slug.current}`}
      >
        <a className="flex md:items-center md:flex-col relative w-full">
          <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center">
            <div className="flex items-center h-full">
              <Image
                src={urlFor(product?.image[0]).url()}
                width={280}
                height={300}
                alt={product.name}
                className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 "
              />
            </div>
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
          </div>
          <div className="flex flex-col justify-between  flex-grow  w-1/2 md:w-full  px-1 md:px-3 py-2 md:py-4">
            <div className="flex justify-center md:justify-start flex-col  flex-grow overflow-hidden">
              <div className="self-center">
                <StarRatingComponent
                  name="product_rate"
                  starCount={5}
                  value={product.starRating}
                  starColor={"#ffc300"}
                  emptyStarColor={"#d6d6d6"}
                />
              </div>
              <h4 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute  ">
                {product.name}
              </h4>
            </div>
            <ProductPrice price={product.price} discount={product.discount} />
          </div>
        </a>
      </Link>

      <CardActions product={product} />
    </div>
  );
};

export default Card;
