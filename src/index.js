import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBooks from "./component/SearchBooks";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/SearchBooks" element={<SearchBooks />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById("root")
);