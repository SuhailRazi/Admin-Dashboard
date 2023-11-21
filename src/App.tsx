import Home from "./pages/home/Home"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "users",
      element: <div><Users /></div>,
    },
    {
      path: "products",
      element: <div><Products /></div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
