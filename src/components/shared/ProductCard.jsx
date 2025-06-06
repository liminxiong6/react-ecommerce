import React, { useState } from "react";
import ProductViewModal from "./ProductViewModal";
import { FaShoppingCart } from "react-icons/fa";
import { truncateText } from "../../utils/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-actions";
import toast from "react-hot-toast";

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    about = false,
}) => {
    const btnLoader = false;
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const dispatch = useDispatch();

    const isProductAvailable = quantity && Number(quantity) > 0;

    function handleProductView() {
        if (!about) {
            setOpenProductViewModal(true);
        }
    }

    const addToCartHandler = (cartItems) => {
        dispatch(addToCart(cartItems, 1, toast));
    };
    return (
        <>
            <div className="overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div
                    onClick={() => handleProductView()}
                    className="aspect-[3/2] w-full overflow-hidden"
                >
                    <img
                        src={image}
                        alt={productName}
                        className="h-full w-full transform cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="p-6">
                    <h2
                        onClick={() => handleProductView()}
                        className="mb-2 cursor-pointer text-lg font-semibold"
                    >
                        {truncateText(productName, 35)}
                    </h2>
                    <div className="h-20">
                        <p className="text-sm text-gray-600">
                            {truncateText(description, 80)}
                        </p>
                    </div>
                    {!about && (
                        <div className="flex items-end justify-between">
                            {/* price */}
                            {specialPrice ? (
                                <div className="flex flex-col">
                                    <span className="text-gray-700 line-through">
                                        ${Number(price).toFixed(2)}
                                    </span>
                                    <span className="text-xl font-bold text-slate-700">
                                        ${Number(specialPrice).toFixed(2)}
                                    </span>
                                </div>
                            ) : (
                                <div>
                                    {" "}
                                    <span className="text-xl font-bold text-slate-700">
                                        ${Number(price).toFixed(2)}
                                    </span>
                                </div>
                            )}
                            {/* product available */}
                            <button
                                disabled={!isProductAvailable || btnLoader}
                                className={`bg-blue-500 ${isProductAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"} flex w-36 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-white transition-colors duration-300`}
                                onClick={() =>
                                    addToCartHandler({
                                        image,
                                        productId,
                                        productName,
                                        description,
                                        specialPrice,
                                    })
                                }
                            >
                                <FaShoppingCart />
                                {isProductAvailable
                                    ? "Add to Cart"
                                    : " Stock Out"}
                            </button>
                        </div>
                    )}
                </div>
                <ProductViewModal
                    isOpen={openProductViewModal}
                    setIsOpen={setOpenProductViewModal}
                    product={{
                        productId,
                        productName,
                        image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice,
                    }}
                    isAvailable={isProductAvailable}
                />
            </div>
        </>
    );
};

export default ProductCard;
