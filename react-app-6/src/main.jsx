import ReactDom from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/book";
import { AuthProvier } from "./context/auth";

const parentElement = document.getElementById("root");
const parentDom = ReactDom.createRoot(parentElement);
parentDom.render(
  <BrowserRouter>
    <BookProvider>
		<AuthProvier>
     		 <App />
		</AuthProvier>
    </BookProvider>
  </BrowserRouter>
);
