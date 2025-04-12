import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import ProductsPage from "./pages/Product";

const router = createBrowserRouter([{ path: "/", element: <ProductsPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
