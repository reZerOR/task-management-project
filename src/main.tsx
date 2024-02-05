/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { TouchBackend } from "react-dnd-touch-backend";
import ScrollZone from "react-dnd-scrollzone";
// import { ReactNativeBackend } from "react-dnd-react-native-backend";

const queryClient = new QueryClient();
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
const Backend = isMobile ? TouchBackend : HTML5Backend;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <DndProvider backend={Backend} options={{ enableMouseEvents: true }}>
    {/* <React.StrictMode> */}
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ScrollZone>
            <ToastContainer />
          </ScrollZone>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
    {/* </React.StrictMode> */}
  </DndProvider>
);
