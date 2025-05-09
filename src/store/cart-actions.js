import { cartActions } from "./cart-slice";

export const addToCart = (data, qty = 1, toast) => {
    return (dispatch, getState) => {
        // find the product, access other state
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

// increase by 1
export const increaseCartQuantity = (
    productId,
    toast,
    currentQuantity,
    setCurrentQuantity,
) => {
    return (dispatch, getState) => {
        const { products } = getState().product;
        const getProduct = products.find((item) => item.productId == productId);
        const isQuantityExist = getProduct.quantity >= currentQuantity + 1;
        if (isQuantityExist) {
            // if increase the qty, need to update the quantity react state => trigger re-render
            setCurrentQuantity((qty) => qty + 1);
            dispatch(
                cartActions.addCart({
                    productId,
                    quantity: 1,
                }),
            );
            localStorage.setItem(
                "cartItems",
                JSON.stringify(getState().cart.cart),
            );
        } else {
            toast.error("Quantity reached to limit");
        }
    };
};

// decrease by 1
export const decreaseCartQuantity = (productId) => {
    return (dispatch) => {
        dispatch(cartActions.addCart({ productId, quantity: -1 }));
    };
};

export const removeFromCart = (data, toast) => (dispatch) => {
    dispatch(cartActions.removeCart(data));
    toast.success(`${data.productName} removed from cart`);
};
