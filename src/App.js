import React from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home Page/Home";
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
