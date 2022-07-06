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
      state.items.push({
        ...action.payload,
      });
    },
    removeFromFavorite(state, action: PayloadAction<string>) {
      const productSlug = action.payload;
      state.items = state.items.filter(
        (item) => item.slug.current !== productSlug
      );
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
