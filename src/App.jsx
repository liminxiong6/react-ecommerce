import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Products from "./components/Products";

const router = createBrowserRouter([{ path: "/", element: <Products /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
