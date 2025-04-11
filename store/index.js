import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product-slice";

export const store = configureStore({
  reducer: { product: productSlice.reducer },
});
