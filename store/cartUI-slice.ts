import { createSlice } from "@reduxjs/toolkit";

export interface ICartUI {
  cartBoxIsVisible: boolean;
  cartPageIsVisible: boolean;
}

const initialState: ICartUI = {
  cartBoxIsVisible: false,
  cartPageIsVisible: false,
};

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggleCartBox(state) {
      state.cartBoxIsVisible = !state.cartBoxIsVisible;
    },
    toggleCartPage(state) {
      state.cartPageIsVisible = !state.cartPageIsVisible;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
