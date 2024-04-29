import ReactDom from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/book";
import { AuthProvider } from "./context/auth";
import { Provider } from "react-redux";
import { store } from "./store/store";

const parentElement = document.getElementById("root");
const parentDom = ReactDom.createRoot(parentElement);
parentDom.render(
  <BrowserRouter>
    <BookProvider>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </BookProvider>
  </BrowserRouter>
);
