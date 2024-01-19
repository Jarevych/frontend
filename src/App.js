import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import React, { lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
