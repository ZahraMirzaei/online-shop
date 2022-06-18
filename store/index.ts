import { configureStore } from "@reduxjs/toolkit";

import specialOfferProductsReducer from "./specialOfferProducts-slice";
import newestProductReducer from "./newestProduct-slice";

const store = configureStore({
  reducer: {
    specialOfferProductsList: specialOfferProductsReducer,
    newestProductsList: newestProductReducer,
  },
});

export default store;
