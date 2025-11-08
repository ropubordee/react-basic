import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import HomePersonList from "./pages/HomePersonList";
import RootLayout from "./Components/layouts/RootLayout";
import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./Components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "product/:productId", element: <ProductDetail /> },
    ],
  },
  { path: "person", element: <HomePersonList /> },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
