import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import HomePersonList from "./pages/HomePersonList";
import RootLayout from "./Components/layouts/RootLayout";
import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./Components/PageNotFound";
import Section from "./Components/Section";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "product/:productId", element: <ProductDetail /> },
      { path: "section", element: <Section /> },
      { path: "section2", element: <Section2 /> },
      { path: "section3", element: <Section3 /> },
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
