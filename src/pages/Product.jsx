import React from "react";
import Products from "../components/Products";
import Filter from "../components/Filter";

const ProductsPage = () => {
  return (
    <div className="px-4 py-14 sm:px-8 lg:px-14 2xl:mx-auto 2xl:w-[90%]">
      <Filter />
      <Products />
    </div>
  );
};

export default ProductsPage;
