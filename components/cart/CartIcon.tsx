import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions, ICartUI } from "../../store/cartUI-slice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import CartBox from "./CartBox";
import { Transition } from "react-transition-group";

interface RootState {
  cartUi: ICartUI;
}

const Basket = () => {
  const dispatch = useDispatch();
  const showCartBox = useSelector(
    (state: RootState) => state.cartUi.cartBoxIsVisible
  );
  const nodeRef = useRef<HTMLDivElement>(null);

  function onMouseHoverHandler() {
    dispatch(cartUiActions.toggleCartBox());
  }
  return (
    <Link href="/">
      <a
        className="relative flex items-center ltr:md:pl-6 rtl:md:pr-6 rtl:md:border-r-2 rtl:md:border-r-slate-300 ltr:md:border-l-2 ltr:md:border-l-slate-300 z-50"
        onMouseOver={onMouseHoverHandler}
        onMouseOut={onMouseHoverHandler}
      >
        <AiOutlineShoppingCart style={{ fontSize: "1.6rem" }} />
        <span className="absolute -top-3 rtl:-right-[0.3rem] rtl:md:right-[1rem] ltr:-left-[0.3rem] ltr:md:left-[1rem] flex items-center justify-center w-5 h-5 rtl:pt-[0.1rem] rounded-full bg-palette-primary text-[0.75rem] leading-3 text-white shadow-lg">
          0
        </span>
        <Transition
          nodeRef={nodeRef}
          in={showCartBox}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div ref={nodeRef} className="z-[100]">
                <CartBox />
              </div>
            );
          }}
        </Transition>
      </a>
    </Link>
  );
};

export default Basket;
