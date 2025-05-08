import React from "react";

const SetQuantity = ({ quantity, handleQtyIncrease, handleQtyDecrease }) => {
    return (
        <div className="flex items-center gap-8">
            {/* {cardCounter ? null : <div className="font-semibold">QAUNTITY</div>} */}
            <div className="flex flex-col items-center gap-4 text-sm md:flex-row lg:text-[22px]">
                <button
                    disabled={quantity <= 1}
                    className="rounded border-[1.2px] border-slate-400 px-3 py-1"
                    onClick={handleQtyDecrease}
                >
                    -
                </button>
                <div className="text-sm">{quantity}</div>
                <button
                    disabled={quantity <= 1}
                    className="rounded border-[1.2px] border-slate-400 px-3 py-1"
                    onClick={handleQtyIncrease}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default SetQuantity;
