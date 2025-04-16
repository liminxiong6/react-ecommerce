import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { FaExclamationTriangle } from "react-icons/fa";
import useProducFilter from "../hook/useProductFilter";
import Filter from "./Filter";
import { useEffect } from "react";
import { fetchCategories } from "../store/product-actions";

const Products = () => {
  const { products, categories } = useSelector((state) => state.product);
  const { isLoading, errorMessage } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useProducFilter();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="px-4 py-14 sm:px-8 lg:px-14 2xl:mx-auto 2xl:w-[90%]">
      <Filter categories={categories ? categories : []} />
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <div className="flex h-[200px] items-center justify-center">
          <FaExclamationTriangle className="mr-2 text-3xl text-slate-800" />
          <span className="text-lg font-medium text-slate-800">
            {errorMessage}
          </span>
        </div>
      ) : (
        <div className="min-h-[700px]">
          <div className="grid gap-x-6 gap-y-6 pt-14 pb-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {products &&
              products.map((product) => {
                return <ProductCard key={product.productId} {...product} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
