import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Global.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { store} from "./Redux/Storage"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>
);

// iconVariant={{
//   success: "🚙  ",
//   error: "✖️",
//   warning: "⚠️",
//   info: "🙋🏻‍♂️ ",
// }}
