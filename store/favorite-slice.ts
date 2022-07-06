import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavorite } from "../lib/types/favorite";
import { IProduct } from "../lib/types/products";

const initialState: IFavorite = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<IProduct>) {
      const newItem = action.payload;
      state.items.push({
        slug: newItem.slug.current,
        image: newItem.image,
        name: newItem.name,
        price: newItem.price,
        discount: newItem.discount,
        brand: newItem.brand,
        category: newItem.category,
      });
    },
    removeFromFavorite(state, action: PayloadAction<string>) {
      const productSlug = action.payload;
      state.items = state.items.filter((item) => item.slug !== productSlug);
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
