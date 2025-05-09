import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from "./SetQuantity";
import { useDispatch } from "react-redux";
import {
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
} from "../../store/cart-actions";
import toast from "react-hot-toast";
import { formatPrice } from "../../utils/formatPrice";
import { truncateText } from "../../utils/truncateText";

const ItemContent = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
}) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const handleQtyIncrease = (productId) => {
        dispatch(
            increaseCartQuantity(
                productId,
                toast,
                currentQuantity,
                setCurrentQuantity,
            ),
        );
    };

    const handleQtyDecrease = (productId) => {
        if (currentQuantity > 1) {
            setCurrentQuantity((qty) => qty - 1);
            dispatch(decreaseCartQuantity(productId));
        }
    };

    const removeItemFromCart = (productId, productName) => {
        dispatch(removeFromCart({ productId, productName }, toast));
    };

    return (
        <div className="md:text-md grid grid-cols-4 items-center border-t-[1px] border-slate-200 py-4 text-sm md:grid-cols-5">
            <div className="flex flex-col gap-2 justify-self-start md:col-span-2">
                <div className="flex flex-col gap-0 text-lg text-slate-800 sm:gap-3 md:col-span-2 md:flex-row lg:gap-4">
                    <h3 className="text-sm font-semibold text-slate-600 lg:text-[17px]">
                        {truncateText(productName)}
                    </h3>
                </div>
                <div className="w-12 sm:w-24 md:w-36">
                    <img
                        src={image}
                        alt={productName}
                        className="h-12 w-full rounded-md object-cover sm:h-24 md:h-36"
                    />
                </div>
                <div className="mt-2">
                    <button
                        onClick={() => {
                            removeItemFromCart(productId, productName);
                        }}
                        className="flex cursor-pointer items-center gap-2 rounded-md border border-rose-600 px-4 py-1 text-xs font-semibold text-rose-600 transition-colors duration-200 hover:bg-red-50"
                    >
                        <HiOutlineTrash size={15} />
                        Remove
                    </button>
                </div>
            </div>
            <div className="justify-self-center text-sm font-semibold text-slate-600 lg:text-[17px]">
                {formatPrice(Number(specialPrice))}
            </div>
            <div className="justify-self-center">
                <SetQuantity
                    quantity={currentQuantity}
                    handleQtyIncrease={() => {
                        handleQtyIncrease(productId);
                    }}
                    handleQtyDecrease={() => {
                        handleQtyDecrease(productId);
                    }}
                />
            </div>
            <div className="justify-self-center text-sm font-semibold text-slate-600 lg:text-[17px]">
                {formatPrice(Number(quantity) * Number(specialPrice))}
            </div>
        </div>
    );
};

export default ItemContent;
