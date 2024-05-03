import { Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/header/header";
import AboutPage from "./pages/about";
import BooksPage from "./pages/books";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import BookPage from "./pages/book";

export default function Page() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookId" element={<BookPage />} />
        <Route path="/books/:bookId/:id" element={<BookPage />} />
      </Routes>
    </>
  );
}
