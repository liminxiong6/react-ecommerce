import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import ProductsPage from "./pages/Product";
import { loader as productsLoader } from "./components/Products";

const router = createBrowserRouter([
  { path: "/products", element: <ProductsPage />, loader: productsLoader },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
