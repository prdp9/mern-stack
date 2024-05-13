import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});

  useEffect(() => {
    fetchBookDetail();
  }, []);

  const fetchBookDetail = async () => {
    await fetch(
      `https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${params.bookId}`
    )
      .then((res) => res.json())
      .then((data) => setBook(data));
  };
  const handleNavigation = () => {
    // calculation
    navigate("/");
  };
  return (
    <div>
      <h2>Book Detail Page</h2>
      <img src={book.cover_image} alt="book_image" height={200} width={200} />
      <h2>Title:{book.title}</h2>
      <h2>Pages:{book.pages}</h2>
      <h2>Author ID:{book.author_id}</h2>
      <h2>Release Date:{book.releaseDate}</h2>
      <h2>ISBN:{book.isbn}</h2>
      <button onClick={handleNavigation}>Go to HomePage</button>
    </div>
  );
};

export default BookPage;
