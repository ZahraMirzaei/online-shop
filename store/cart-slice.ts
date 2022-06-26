import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "../lib/types/cart";
import { IProduct } from "../lib/types/products";

const initialState: ICart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(
      state: ICart,
      action: PayloadAction<{ product: IProduct; quantity: number }>
    ) {
      const newItem = action.payload.product;
      const existingItem = state.items.find(
        (item) => item.slug.current === newItem.slug.current
      );
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      if (!existingItem) {
        const totalEnPrice =
          newItem.isOffer && newItem.discount
            ? newItem.discount * action.payload.quantity
            : newItem.price * action.payload.quantity;

        const totalFaPrice =
          newItem.isOffer && newItem.irrdiscount
            ? newItem.irrdiscount * action.payload.quantity
            : newItem.irrprice * action.payload.quantity;

        state.items.push({
          image: newItem.image,
          name: newItem.name,
          slug: newItem.slug,
          price: newItem.price,
          irrprice: newItem.irrprice,
          discount: newItem.discount,
          irrdiscount: newItem.irrdiscount,
          brand: newItem.brand,
          category: newItem.category,
          isOffer: newItem.isOffer,
          registerDate: newItem.registerDate,
          starRating: newItem.starRating,
          quantity: action.payload.quantity,
          totalEnPrice,
          totalFaPrice,
        });
      } else {
        const totalEnPrice =
          existingItem.isOffer && existingItem.discount
            ? existingItem.totalEnPrice +
              existingItem.discount * action.payload.quantity
            : existingItem.totalEnPrice +
              existingItem.price * action.payload.quantity;

        const totalFaPrice =
          existingItem.isOffer && existingItem.irrdiscount
            ? existingItem.totalFaPrice +
              existingItem.irrdiscount * action.payload.quantity
            : existingItem.totalFaPrice +
              existingItem.irrprice * action.payload.quantity;

        existingItem.quantity += action.payload.quantity;
        existingItem.totalEnPrice = totalEnPrice;
        existingItem.totalFaPrice = totalFaPrice;
      }
    },

    removeItemFromCart(
      state: ICart,
      action: PayloadAction<string> //slug.current as payload
    ) {
      const productSlug = action.payload;
      const existingItem = state.items.find(
        (item) => item.slug.current === productSlug
      );
      state.totalQuantity--;
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.slug.current !== productSlug
        );
      } else {
        existingItem!.quantity--;
        existingItem!.totalEnPrice =
          existingItem!.totalEnPrice - existingItem!.price;
        existingItem!.totalFaPrice =
          existingItem!.totalFaPrice - existingItem!.irrprice;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
