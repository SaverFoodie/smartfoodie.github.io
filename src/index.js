import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/layout";
import Angebot from "./page/unser-angebot/index";
import Products from "./page/unser-angebot/banner4";
import FoodieSteps from "./page/unser-angebot/order";
import FoodieMachine from "./page/unser-angebot/machines";
import News from "./page/unser-angebot/banner5";
import Contact from "./page/unser-angebot/contact";
import FoodiePlaces from "./page/unser-angebot/places";
import { LanguageProvider } from "./language";
import NewsDetail from "./page/unser-angebot/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Angebot></Angebot>,
      },

      {
        path: "products-and-solutions",
        element: (
          <>
            <FoodieMachine></FoodieMachine>
            <FoodieSteps></FoodieSteps> 
            <FoodiePlaces></FoodiePlaces>
          </>
        ),
      },
      {
        path: "our-food",
        element: <Products></Products>
      },
      {
        path: "blogs",
        element: <News></News>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "news/:newsId",
        element: <NewsDetail />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
reportWebVitals();
