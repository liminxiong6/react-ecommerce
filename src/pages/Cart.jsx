import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemContent from "../components/cart/ItemContent";

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    const newCart = { ...cart };

    newCart.totalPrice = cart?.reduce(
        (acc, cur) =>
            acc + Number(cur?.specialPrice) * Number(cur?.quantity, 0),
    );

    let cartContent;
    if (!cart || cart.length === 0) {
        cartContent = (
            <div className="border-t-[1px] border-slate-200 py-5 text-center text-sm">
                <h1>Cart is Empty</h1>
            </div>
        );
    } else {
        cartContent = (
            <>
                {/* cart content */}
                <div>
                    {cart &&
                        cart.length > 0 &&
                        cart.map((item, i) => (
                            <ItemContent key={i} {...item} />
                        ))}
                </div>
                {/* total price */}
                <div className="flex flex-col gap-4 border-t-[1.5px] border-slate-200 px-2 py-4 sm:flex-row sm:justify-between sm:px-0">
                    <div></div>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="flex w-full justify-between text-sm font-semibold md:text-lg">
                            <span>Subtotal</span>
                            <span>$400</span>
                        </div>
                        <p className="text-slate-500">
                            Taxes and shipping calculated at checkout
                        </p>
                        <Link
                            className="flex w-full justify-end"
                            to="/checkout"
                        >
                            <button
                                onClick={() => {}}
                                className="bg-custom-blue flex w-[300px] items-center justify-center gap-2 rounded-sm px-4 py-2 font-semibold text-white transition duration-300 hover:text-gray-300"
                            >
                                <MdShoppingCart size={20} />
                                Checkout
                            </button>
                        </Link>
                        <Link
                            to="/products"
                            className="mt-2 flex items-center gap-2 text-slate-500"
                        >
                            <MdArrowBack />
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="px-4 py-10 sm:px-8 lg:px-14">
            <div className="mb-12 flex flex-col items-center">
                <h1 className="flex items-center gap-3 text-4xl font-bold text-gray-900">
                    <MdShoppingCart size={36} className="text-gray-700" />
                    Your Cart
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                    All your selected items
                </p>
            </div>
            {/* row header */}
            <div className="grid grid-cols-4 items-center pb-2 font-semibold md:grid-cols-5">
                <div className="justify-self-start text-lg text-slate-800 md:col-span-2 lg:ps-4">
                    Product
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Price
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Quantity
                </div>
                <div className="justify-self-center text-lg text-slate-800">
                    Total
                </div>
            </div>
            {cartContent}
        </div>
    );
};

export default Cart;
