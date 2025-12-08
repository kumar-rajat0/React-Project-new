import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import App from "./App";

const Home = React.lazy(() => import("./components/ProductList"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));
const Cart = React.lazy(() => import("./components/Cart"));
const Checkout = React.lazy(() => import("./components/Checkout"));
const NotFound = React.lazy(() => import("./components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);
