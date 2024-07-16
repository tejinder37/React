import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  //   {/* <RouterProvider router={router} /> */}
  // </React.StrictMode>

  // Removing Strict mode to use dropable

  <BrowserRouter>
    <App />
  </BrowserRouter>
);
