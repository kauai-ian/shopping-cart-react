import React from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";
import AppRouter from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <AppRouter />
    </ShoppingCartProvider>
  </React.StrictMode>
);
