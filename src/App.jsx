import { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Sidebar from "./components/partials/sidebar/Sidebar";
import Navbar from "./components/partials/navbar/Navbar";

function App() {
  const [fullMenu, setFullMenu] = useState(false);
  return (
    <BrowserRouter>
      <div className={`flex`}>
        <aside
          className={`${
            !fullMenu && "max-[1024px]:hidden"
          } fixed top-0 left-0 transition ease-in-out duration-300 z-40`}
        >
          <Sidebar fullMenu={fullMenu} setFullMenu={setFullMenu} />
        </aside>
        <main
          className={`${
            fullMenu ? " lg:ml-[250px]" : "lg:ml-[70px]"
          } w-full transition-all duration-600 ease-in`}
        >
          <Navbar fullMenu={fullMenu} setFullMenu={setFullMenu} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
