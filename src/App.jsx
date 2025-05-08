import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Products from "./components/product/Products";
import Home from "./components/home/Home";
import RootLayout from "./pages/Root";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Cart from "./components/cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "products", element: <Products /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "cart", element: <Cart /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster position="bottom-center" />
        </>
    );
}

export default App;
