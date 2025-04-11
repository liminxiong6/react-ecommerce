import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import ProductsPage from "./pages/Product";
import { Provider } from "react-redux";
import { store } from "../store";

const router = createBrowserRouter([
  { path: "/products", element: <ProductsPage /> },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
