import { configureStore } from "@reduxjs/toolkit";

import specialOfferProductsReducer from "./specialOfferProducts-slice";

const store = configureStore({
  reducer: {
    specialOfferProductsList: specialOfferProductsReducer,
  },
});

export default store;
