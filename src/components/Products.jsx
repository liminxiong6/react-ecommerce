import React, { Suspense } from "react";
import ProductCard from "./ProductCard";
import { Await, useLoaderData } from "react-router-dom";

const Products = () => {
  const { products } = useLoaderData();
  return (
    <div className="px-4 py-14 sm:px-8 lg:px-14 2xl:mx-auto 2xl:w-[90%]">
      <div className="min-h-[700px]">
        <div className="grid gap-x-6 gap-y-6 pt-14 pb-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Await resolve={products}>
              {(loadedProducts) =>
                loadedProducts.map((product) => {
                  return <ProductCard key={product.productId} {...product} />;
                })
              }
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Products;

function loadProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        {
          productId: 652,
          productName: "Iphone Xs max",
          image: "https://placehold.co/600x400",
          description:
            "Experience the latest in mobile technology with advanced cameras, powerful processing, and an all-day battery.",
          quantity: 1,
          price: 1450.0,
          discount: 10.0,
          specialPrice: 1305.0,
        },
        {
          productId: 654,
          productName: "MacBook Air M2s",
          image: "https://placehold.co/600x400",
          description:
            "Ultra-thin laptop with Apple's M2 chip, providing fast performance in a lightweight, portable design.",
          quantity: 0,
          price: 2550.0,
          discount: 20.0,
          specialPrice: 2040.0,
        },
      ];
      resolve(products);
    }, 2000);
  });
}

export const loader = () => {
  return {
    products: loadProducts(), // load the data after loading this page (fallback)
  };
};
