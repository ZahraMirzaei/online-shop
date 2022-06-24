import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";

const ProductPageActions = () => {
  return (
    <div className=" py-4 -mt-6 flex flex-col justify-evenly absolute top-0 ltr:left-0 rtl:right-0 md:static rounded-lg">
      <div className="hover:text-rose-600 transition-colors px-2 md:px-6 py-3">
        <AiOutlineHeart style={{ fontSize: "1.5rem" }} />
      </div>
      <div className="hover:text-rose-600 transition-colors px-2 md:px-6 py-3">
        <IoShareSocialOutline style={{ fontSize: "1.5rem" }} />
      </div>
    </div>
  );
};

export default ProductPageActions;
