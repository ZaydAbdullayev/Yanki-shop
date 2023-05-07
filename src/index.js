import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Global.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);

// iconVariant={{
//   success: "🚙  ",
//   error: "✖️",
//   warning: "⚠️",
//   info: "🙋🏻‍♂️ ",
// }}
