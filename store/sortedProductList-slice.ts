import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductList } from "../lib/types/productList";
import { IProduct } from "../lib/types/products";
import { getTimeStamp, sortByTimeStamp } from "../utilities/sortByTimeStamp";
import { sortByPoPularity } from "../utilities/sortByPopularity";
import { sortByCheapest, sortByExpensive } from "../utilities/sortByCost";

const initialState: IProductList = {
  productsList: [],
};

const SortedProductsListSlice = createSlice({
  name: "sortedProductsList",
  initialState,
  reducers: {
    sortProductsList(
      state,
      action: PayloadAction<{ productsList: IProduct[]; sortBasedOn: string }>
    ) {
      switch (action.payload.sortBasedOn) {
        case "all":
          state.productsList = action.payload.productsList;
          break;
        case "newestProducts": {
          const productsWithTimeStamp = state.productsList.map((product) => {
            return {
              ...product,
              timeStamp: getTimeStamp(product.registerDate),
            };
          });
          state.productsList = productsWithTimeStamp.sort(sortByTimeStamp);
          break;
        }
        case "popular": {
          state.productsList = state.productsList.sort(sortByPoPularity);
          break;
        }
        case "cheapest": {
          state.productsList = state.productsList.sort(sortByCheapest);
          break;
        }
        case "expensive": {
          state.productsList = state.productsList.sort(sortByExpensive);
          break;
        }
      }
    },
  },
});
export const SortedProductsListActions = SortedProductsListSlice.actions;

export default SortedProductsListSlice.reducer;
