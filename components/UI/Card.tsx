import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import StarRatingComponent from "react-star-rating-component";

const Card = () => {
  const { t, locale } = useLanguage();
  return (
    <div className="flex justify-start flex-wrap">
      <div className="max-w-[480px] sm:max-w-[300px] sm:w-[50%] md:min-w-[250px] md:w-[250px] md:max-w-[300px] flex-grow shadow-xl my-4 ltr:mr-2 rtl:ml-1 md:mx-3  bg-palette-card rounded-xl">
        <Link href="/">
          <a className="flex md:items-center md:flex-col relative">
            <div className="w-full bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none">
              <Image
                width={280}
                height={250}
                src="/images/card-temporary/image.png"
                alt="laptop"
                className=" drop-shadow-xl object-contain "
              />
            </div>
            <div className="flex flex-col justify-between items-start  w-[90%]  px-1 md:px-3 py-2 md:py-4">
              <div className="flex justify-center flex-col flex-grow">
                <div className="self-center">
                  <StarRatingComponent
                    name="product_rate"
                    starCount={5}
                    value={4}
                    starColor={"gold"}
                    emptyStarColor={"gray"}
                  />
                </div>
                <h4 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute ltr:md:-ml-4 rtl:md:-mr-4 ">
                  Lenovo Yoga 7i Intel Core i5 8GB RAM 256GB SSD 14&quot; 2-in-1
                  Laptop
                </h4>
              </div>
              <span className="text-sm self-end mt-6 font-bold">
                <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>2,350,00
                <sub className="ml-1">{locale === "fa" ? "تومان" : ""}</sub>
              </span>
              <div className="w-[52%] md:w-auto md:h-[130px] mt-2 p-2 flex md:flex-col justify-around self-center absolute bottom-0 md:bottom-auto md:-top-2 left-0  md:-left-3 rounded-bl-xl md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-palette-card/20">
                <div className="hover:text-rose-600 transition-colors">
                  <AiOutlineHeart style={{ fontSize: "1.2rem" }} />
                </div>
                <div className="hover:text-rose-600 transition-colors">
                  <IoShareSocialOutline style={{ fontSize: "1.2rem" }} />
                </div>
                <div className="hover:text-rose-600 transition-colors">
                  <AiOutlineShoppingCart style={{ fontSize: "1.2rem" }} />
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
