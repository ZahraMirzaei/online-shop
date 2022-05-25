import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Basket = () => {
  return (
    <div className="relative flex items-center">
      <AiOutlineShoppingCart style={{ fontSize: "1.6rem" }} />
      <span className="absolute -top-3 -right-[0.3rem] flex items-center justify-center w-5 h-5 rtl:pt-[0.1rem] rounded-full bg-palette-primary text-[0.75rem] leading-3 text-white">
        23
      </span>
    </div>
  );
};

export default Basket;
