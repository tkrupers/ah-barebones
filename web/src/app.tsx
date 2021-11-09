import React from "react";
import { Routes, Route } from "react-router-dom";

import Search from "@pages/search";

const App = () => (
  <Routes>
    <Route path="/" element={<Search />} />
  </Routes>
);

export default App;
