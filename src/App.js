import React, { useState } from "react";
import PatientTable from "./Components/Patient-Table/PatientTable";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home Page/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import PatientPage from "./pages/Patient Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/Cases" element={<PatientPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
