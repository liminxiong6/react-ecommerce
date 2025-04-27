import { cartActions } from "./cart-slice";

export const addToCart = (data, qty = 1, toast) => {
    return (dispatch, getState) => {
        // find the product
        const { products } = getState().product;
        const getProduct = products.find(
            (item) => item.productId === data.productId,
        );
        // Check for the stock
        const isQuantityExist = getProduct.quantity >= qty;
        // If in stock -> add
        if (isQuantityExist) {
            dispatch(cartActions.addCart({ ...data, quantity: qty }));
            localStorage.setItem(
                "cartItems",
                JSON.stringify(getState().cart.cart),
            );
            toast.success(`${data?.productName} added to the cart`);
        } else {
            // If not -> error
            toast.error("Out of stock");
        }
    };
};
