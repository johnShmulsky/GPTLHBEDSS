import React, { useContext } from "react";
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
import ProtectedRoute from "./utils/ProtectedRoute";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme, oglalaTheme, rosebudTheme } from "./theme";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const { userData } = useContext(AuthContext);
  const userRole = userData?.userRoles[2];
  console.log(userData);
  const currentTheme =
    userRole === "rosebud"
      ? rosebudTheme
      : userRole === "oglala"
      ? oglalaTheme
      : defaultTheme;

  return (
    <div className="App">
      <ChakraProvider theme={currentTheme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/index.html" />} />
            <Route path="/index.html" element={<Home />} />
            <Route
              path="/Cases"
              element={
                <ProtectedRoute>
                  <PatientPage />
                </ProtectedRoute>
              }
            />
            <Route path="/Data" element={<DataHomePage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
