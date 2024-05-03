import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { addNewBook, deleteBook } from "../store/slices/book";
import BookRow from "../components/books/book-row";

const BooksPage = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const [bookName, setBookName] = useState("");

  const { bookList } = useSelector((state) => state.book);

  const handleAddBook = () => {
    dispatch(addNewBook(bookName));
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-xl font-semibold">Books Page</h2>

      <div className="flex flex-col gap-3 my-2">
        {bookList.map((book) => (
          <BookRow book={book} />
        ))}
      </div>

      {/* <input
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        type="text"
        placeholder="Enter your book name"
        className="border-2 rounded-md p-3 my-3"
      />

      <button
        onClick={handleAddBook}
        className="bg-green-300 px-3 text-white rounded-md py-1"
      >
        Submit
      </button> */}
    </div>
  );
};

export default BooksPage;
