import { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";

function App() {
  const [fullMenu, setFullMenu] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home fullMenu={fullMenu} setFullMenu={setFullMenu} />}
        />
        <Route
          path="/blog"
          element={<Blog fullMenu={fullMenu} setFullMenu={setFullMenu} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
