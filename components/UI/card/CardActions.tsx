import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { IProduct } from "../../../lib/types/products";

interface Props {
  product: IProduct;
}

const CardActions: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
  }

  return (
    <div className="w-1/2 md:w-auto md:h-[130px] mt-2 p-2 flex md:flex-col justify-around self-center absolute bottom-2 md:-top-2 md:bottom-auto left-0  md:-left-1 rounded-lg md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-palette-card/20  ">
      <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
        <AiOutlineHeart style={{ fontSize: "1.2rem" }} />
      </div>
      <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
        <IoShareSocialOutline style={{ fontSize: "1.2rem" }} />
      </div>
      <div
        className="hover:text-rose-600 transition-colors sm:px-3 md:px-0"
        onClick={addToCartHandler}
      >
        <AiOutlineShoppingCart style={{ fontSize: "1.2rem" }} />
      </div>
    </div>
  );
};

export default CardActions;
