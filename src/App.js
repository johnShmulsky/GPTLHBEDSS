import React from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import PatientPage from "./pages/Case";
import DataHomePage from "./pages/DataPage/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/index.html" />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/Cases" element={<PatientPage />} />
          <Route path="/Data" element={<DataHomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
