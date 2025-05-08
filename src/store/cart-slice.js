import { createSlice } from "@reduxjs/toolkit";

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
    cart: cartItems,
    totalPrice: 0,
    cartId: null,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // update cart state in redux, add product
        addCart(state, action) {
            const productToAdd = action.payload;
            const existingProduct = state.cart.find(
                (item) => item.productId === productToAdd.productId,
            );
            // already exist in cart
            if (existingProduct) {
                existingProduct.quantity = productToAdd.quantity;
            } else {
                state.cart.push(productToAdd);
            }
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
