import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product-slice";
import errorSlice from "./error-slice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    error: errorSlice.reducer,
  },
});
