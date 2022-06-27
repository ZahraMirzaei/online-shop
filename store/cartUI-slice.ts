import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartUI } from "../lib/types/cart";

const initialState: ICartUI = {
  cartBoxIsVisible: false,
  cartPageIsVisible: false,
};

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggleCartBox(state, action: PayloadAction<boolean>) {
      state.cartBoxIsVisible = action.payload;
    },
    toggleCartPage(state) {
      state.cartPageIsVisible = !state.cartPageIsVisible;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
