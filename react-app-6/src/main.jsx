import ReactDom from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const parentElement = document.getElementById("root");
const parentDom = ReactDom.createRoot(parentElement);
parentDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
