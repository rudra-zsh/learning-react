import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Room from "./pages/Room.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:id" element={<Room />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
