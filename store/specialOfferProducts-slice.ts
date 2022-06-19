import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../lib/types/products";
import { IOfferProducts } from "../lib/types/offerProductsState";

const initialState: IOfferProducts = {
  specialOfferProducts: [],
};

const specialOfferProductsSlice = createSlice({
  name: "specialOfferProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.specialOfferProducts = action.payload;
    },
  },
});

export const specialOfferProductsActions = specialOfferProductsSlice.actions;

export default specialOfferProductsSlice.reducer;
