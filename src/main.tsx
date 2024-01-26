import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
   <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   </HelmetProvider>
  </React.StrictMode>
  </DndProvider>
);
