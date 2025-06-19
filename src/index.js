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
import Products from "./page/food/index";
import ProductAndSolutions from "./page/product_and_solutions/index";
import News from "./page/news/index";
import Contact from "./page/contact/index";
import { LanguageProvider } from "./language";
import NewsDetail from "./page/news/NewsDetails";
import Events from "./page/event/index";
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
            <ProductAndSolutions></ProductAndSolutions>
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
        element: <Events />
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
