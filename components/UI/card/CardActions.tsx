import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { favoriteActions } from "../../../store/favorite-slice";
import {
  RiHeartFill,
  RiHeartAddLine,
  RiShareLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { IProduct } from "../../../lib/types/products";
import { IFavoriteRootState } from "../../../lib/types/favorite";

import { toast } from "react-toastify";
import { useLanguage } from "../../../hooks/useLanguage";

interface Props {
  product: IProduct;
}

const CardActions: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { t } = useLanguage();

  const favoriteItems = useSelector(
    (state: IFavoriteRootState) => state.favorite.items
  );
  const isInFavorite = favoriteItems.some(
    (item) => item.slug.current === product.slug.current
  );
  const FavoriteIcon = isInFavorite ? RiHeartFill : RiHeartAddLine;

  function addToCartHandler() {
    dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
    toast.success(t.productAddedToCartMsg);
  }

  function toggleFavoriteHandler() {
    !isInFavorite
      ? dispatch(favoriteActions.addToFavorite(product))
      : dispatch(favoriteActions.removeFromFavorite(product.slug.current));
  }

  return (
    <div className="w-1/2 md:w-auto md:h-[130px] mt-2 p-2 flex md:flex-col justify-around self-center absolute bottom-2 md:-top-2 md:bottom-auto left-0  md:-left-1 rounded-lg md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-palette-card/20  ">
      <div
        className="hover:text-rose-600 transition-colors sm:px-3 md:px-0"
        onClick={toggleFavoriteHandler}
      >
        <FavoriteIcon
          style={{
            fontSize: "1.2rem",
            fill: `${isInFavorite ? "#ee384e" : ""}`,
          }}
        />
      </div>
      <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
        <RiShareLine style={{ fontSize: "1.2rem" }} />
      </div>
      <div
        className="hover:text-rose-600 active:scale-125 transition-all sm:px-3 md:px-0"
        onClick={addToCartHandler}
      >
        <RiShoppingCart2Line
          style={{
            fontSize: "1.2rem",
          }}
        />
      </div>
    </div>
  );
};

export default CardActions;
