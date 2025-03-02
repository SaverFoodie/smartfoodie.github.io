import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createHashRouter,
  redirect,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "./layout/layout";
import Angebot from "./page/unser-angebot/index";
import Highlight from "./page/unser-angebot/banner2";
import Products from "./page/unser-angebot/banner4";
import Banner from "./page/unser-angebot/banner";
import OurFood from "./page/unser-angebot/Banner3";
import FoodieSteps from "./page/unser-angebot/order";
import FoodieMachine from "./page/unser-angebot/machines";
import News from "./page/unser-angebot/banner5";
import Contact from "./page/unser-angebot/contact";
import FoodiePlaces from "./page/unser-angebot/places";
import { LanguageProvider } from "./language";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect("/home"),
      },
      {
        path: "home",
        element: <Angebot></Angebot>,
      },
      {
        path: "products&solutions",
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
        path: "news",
        element: <News></News>
      },
      {
        path: "contact",
        element: <Contact></Contact>
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
