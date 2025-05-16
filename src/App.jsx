import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Products from "./components/product/Products";
import Home from "./components/home/Home";
import RootLayout from "./pages/Root";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Cart from "./components/cart/Cart";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/shared/PrivateRoute";

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
            {
                element: <PrivateRoute publicPage={true} />,
                children: [{ path: "login", element: <Login /> }],
            },
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
