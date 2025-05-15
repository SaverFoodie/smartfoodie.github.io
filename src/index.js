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
import Angebot from "./page/home/index";
import Products from "./page/food/foodPage";
import FoodieSteps from "./page/product_and_solutions/order";
import FoodieMachine from "./page/product_and_solutions/machines";
import FoodiePlaces from "./page/product_and_solutions/places";
import News from "./page/news/NewsCard";
import Contact from "./page/contact/contact";
import { LanguageProvider } from "./language";
import NewsDetail from "./page/news/NewsDetails";
import EventPage from "./page/event/EventPage";
import EventDetails from "./page/event/EventDetails";
import PrivacyPolicy from "./layout/privacy";
import Impressum from "./layout/impressum";

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
            <FoodiePlaces></FoodiePlaces>
            <FoodieSteps></FoodieSteps> 
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
      {
        path: "events",
        element: <EventPage />
      },
      {
        path: "events/:eventId",
        element: <EventDetails />
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />
      },
      {
        path: "impressum",
        element: <Impressum />
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
