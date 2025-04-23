import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/product-actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";

const Home = () => {
    const { products } = useSelector((state) => state.product);
    const { isLoading, errorMessage } = useSelector((state) => state.error);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="px-4 sm:px-8 lg:px-14">
            <div className="py-6">
                <HeroBanner />
            </div>
            <div className="py-5">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h1 className="text-4xl font-bold text-slate-800">
                        Products
                    </h1>
                    <span className="text-slate-700">
                        Discover our handpicked selection of top-rated items
                        just for you!
                    </span>
                </div>
                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex h-[200px] items-center justify-center">
                        <FaExclamationTriangle className="mr-2 text-3xl text-slate-800" />
                        <span className="text-lg font-medium text-slate-800">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
                    <div className="grid gap-x-6 gap-y-6 pt-14 pb-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                        {products &&
                            products.slice(0, 8).map((product) => {
                                return (
                                    <ProductCard
                                        key={product.productId}
                                        {...product}
                                    />
                                );
                            })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
