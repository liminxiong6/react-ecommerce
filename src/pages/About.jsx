import React from "react";
import ProductCard from "../components/shared/ProductCard";
const products = [
    {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "iPhone 13 Pro Max",
        description:
            "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
        specialPrice: 720,
        price: 780,
    },
    {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "Samsung Galaxy S21",
        description:
            "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
        specialPrice: 699,
        price: 799,
    },
    {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "Google Pixel 6",
        description:
            "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
        price: 599,
        specialPrice: 400,
    },
];
const About = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            <h1 className="mb-12 text-center text-4xl font-bold text-slate-800">
                About Us
            </h1>

            <div className="mb-12 flex flex-col items-center justify-between gap-3 lg:flex-row">
                <div className="mb-6 w-full text-center md:mb-0 md:w-1/2 md:text-left">
                    <p>
                        We’re not just an app—we’re a movement. By connecting
                        local artisans with global shoppers, [App Name] empowers
                        small businesses while giving you access to handcrafted,
                        one-of-a-kind items. Every purchase supports real
                        people. Thank you for being part of our story.
                    </p>
                </div>
                <div>
                    <img
                        src="https://fakeimg.pl/600x400"
                        alt="About Us"
                        className="h-auto w-full transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
            <div>
                <h1 className="mb-12 text-center text-4xl font-bold text-slate-800">
                    Our Products
                </h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, idx) => (
                        <ProductCard
                            key={idx}
                            image={product.image}
                            productName={product.productName}
                            description={product.description}
                            specialPrice={product.specialPrice}
                            price={product.price}
                            about
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
