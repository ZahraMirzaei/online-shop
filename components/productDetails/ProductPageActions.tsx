import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoriteActions } from "../../store/favorite-slice";
import { IProduct } from "../../lib/types/products";
import { IFavoriteRootState } from "../../lib/types/favorite";
import { RiHeartFill, RiHeartAddLine, RiShareLine } from "react-icons/ri";

interface Props {
  product: IProduct;
}
const ProductPageActions: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(
    (state: IFavoriteRootState) => state.favorite.items
  );
  const isInFavorite = favoriteItems.some(
    (item) => item.slug.current === product.slug.current
  );
  let FavoriteIcon = isInFavorite ? RiHeartFill : RiHeartAddLine;
  function toggleFavoriteHandler() {
    !isInFavorite
      ? dispatch(favoriteActions.addToFavorite(product))
      : dispatch(favoriteActions.removeFromFavorite(product.slug.current));
  }
  return (
    <div className=" py-4 -mt-6 flex flex-col justify-evenly absolute top-0 ltr:left-0 rtl:right-0 md:static rounded-lg z-10">
      <div
        className="hover:text-rose-600 transition-colors px-2 md:px-6 py-3 "
        onClick={toggleFavoriteHandler}
      >
        <FavoriteIcon
          style={{
            fontSize: "1.5rem",
            fill: `${isInFavorite ? "#ee384e" : ""}`,
          }}
        />
      </div>
      <div className="hover:text-rose-600 transition-colors px-2 md:px-6 py-3">
        <RiShareLine style={{ fontSize: "1.5rem" }} />
      </div>
    </div>
  );
};

export default ProductPageActions;
