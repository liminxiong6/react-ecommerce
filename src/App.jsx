import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Products from "./components/product/Products";
import Home from "./components/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, element: <Home /> },
            { path: "products", element: <Products /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
