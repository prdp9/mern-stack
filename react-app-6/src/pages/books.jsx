import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBook from "../hooks/book";

const BooksPage = () => {
  const { books, setBooks } = useBook();

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-xl font-semibold">Books Page</h2>
      <div>
        {books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <div>
              <h2>
                {book.id}.{book.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
