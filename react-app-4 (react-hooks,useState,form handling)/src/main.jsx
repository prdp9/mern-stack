import ReactDom from "react-dom/client";
import App from "./app";

const parentElement = document.getElementById("root");
const parentDom = ReactDom.createRoot(parentElement);
parentDom.render(<App />);
