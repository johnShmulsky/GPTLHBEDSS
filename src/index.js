import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Context/AuthProvider";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,

  document.getElementById("root")
);
