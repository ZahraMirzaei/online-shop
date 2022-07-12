import React from "react";
import { useSelector } from "react-redux";
import { ICartRootState, ICartProduct } from "../../lib/types/cart";
import CartItem from "./CartItem";

const CartList = () => {
  const cartItems = useSelector((state: ICartRootState) => state.cart.items);
  return (
    <div>
      <div className="max-w-[950px]">
        {cartItems.length
          ? cartItems.map((cartItem: ICartProduct) => {
              return (
                <CartItem key={cartItem.slug.current} product={cartItem} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default CartList;
