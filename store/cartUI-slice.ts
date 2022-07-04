import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartUI } from "../lib/types/cart";

const initialState: ICartUI = {
  cartBoxIsVisible: false,
};

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggleCartBox(state, action: PayloadAction<boolean>) {
      state.cartBoxIsVisible = action.payload;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
