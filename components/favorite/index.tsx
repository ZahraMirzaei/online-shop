import React from "react";
import { useSelector } from "react-redux";
import { useLanguage } from "../../hooks/useLanguage";
import { IFavoriteRootState } from "../../lib/types/favorite";
import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
  const { t } = useLanguage();
  const favoriteItems = useSelector(
    (state: IFavoriteRootState) => state.favorite.items
  );
  return (
    <div className="max-w-[2100px] mx-auto">
      {favoriteItems.length ? (
        <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
          {favoriteItems.map((favoriteItem) => (
            <FavoriteItem
              key={favoriteItem.slug.current}
              product={favoriteItem}
            />
          ))}
        </div>
      ) : (
        <p>{t.thereAreNoFavorites}</p>
      )}
    </div>
  );
};

export default Favorites;
