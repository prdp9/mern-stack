import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../../store/slices/book";

const BookRow = ({ book }) => {
  const [bookName, setBookName] = useState(book.title);

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  const handleUpdateBook = () => {
    console.log("handle book clicked");
    dispatch(
      updateBook({
        bookId: book.id,
        title: bookName,
      })
    );
  };
  return (
    <div key={book.id} to={`/books/${book.id}`}>
      <div className="flex gap-3">
        <h2>
          {book.id}.{book.title}
        </h2>
        <button
          onClick={() => handleDeleteBook(book.id)}
          className="bg-red-300 text-white px-3 rounded-md"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setIsEdit(true);
          }}
          className="bg-red-300 text-white px-3 rounded-md"
        >
          update
        </button>
      </div>
      {isEdit ? (
        <div className="flex flex-col">
          <input
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            type="text"
            placeholder="Enter your book name"
            className="border-2 rounded-md p-3 my-3"
          />
          <button
            onClick={handleUpdateBook}
            className="bg-green-300 px-3 text-white rounded-md py-1"
          >
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default BookRow;
