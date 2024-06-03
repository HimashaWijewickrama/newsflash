import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../Components/home.view";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/newsflash" />} />
        <Route path="/newsflash" element={<Home />} />
        {/* <Route path="/top" element={<Top />} /> */}
      </Routes>
    </Router>
  );
}
