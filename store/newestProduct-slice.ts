import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../lib/types/products";
import { INewestProducts } from "../lib/types/newestProductsState";

const initialState: INewestProducts = {
  newestProducts: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.newestProducts = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
