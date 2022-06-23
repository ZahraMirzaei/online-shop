import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../lib/types/products";
import { IProductList } from "../lib/types/productList";

const initialState: IProductList = {
  productsList: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.productsList = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
