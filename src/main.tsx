import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./pages/about.tsx";
import { Store } from "./pages/store.tsx";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{router}</React.StrictMode>
);
