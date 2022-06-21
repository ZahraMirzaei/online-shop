import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Basket = () => {
  return (
    <Link href="">
      <a className="relative flex items-center ltr:md:pl-6 rtl:md:pr-6 rtl:md:border-r-2 rtl:md:border-r-slate-300 ltr:md:border-l-2 ltr:md:border-l-slate-300">
        <AiOutlineShoppingCart style={{ fontSize: "1.6rem" }} />
        <span className="absolute -top-3 -right-[0.3rem] md:right-[1rem] flex items-center justify-center w-5 h-5 rtl:pt-[0.1rem] rounded-full bg-palette-primary text-[0.75rem] leading-3 text-white shadow-lg">
          0
        </span>
      </a>
    </Link>
  );
};

export default Basket;
