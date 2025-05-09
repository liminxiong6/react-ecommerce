import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import errorSlice from "./error-slice";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        error: errorSlice.reducer,
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
    },
});
