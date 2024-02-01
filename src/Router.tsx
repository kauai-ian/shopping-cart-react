import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/about.tsx";
import { Store } from "./pages/store.tsx";
import { Cart } from "./pages/cart.tsx";
import { FC } from "react";

const AppRouter: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
