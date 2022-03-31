import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";

const App = (props) => (
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
