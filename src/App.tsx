import { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// 引入组件
import Layout from "./view/Layout";
import Login from "./view/Login";
import Home from "./view/Home";
import User from "./view/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
