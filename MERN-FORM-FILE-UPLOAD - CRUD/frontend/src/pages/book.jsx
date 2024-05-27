import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/axios-private";
import moment from 'moment'

const BookPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const axiosPrivate = useAxiosPrivate()

  const [book, setBook] = useState({});

  useEffect(() => {
    fetchBookDetail();
  }, []);

  const fetchBookDetail = async () => {
    try {
      const response = await axiosPrivate.get(`/books/${params.bookId}`);
      setBook(response.data)
    } catch (error) {

    }
  };
  const handleNavigation = () => {
    // calculation
    navigate("/");
  };
  return (
    <div className="mt-10 flex flex-row items-center justify-center gap-5 text-xl">
      <img src={import.meta.env.VITE_API_URL + '/' + book.image} alt="book_image" height={500} width={500} />
      <div>
        <h2>Title: {book.title}</h2>
        <h2>Description: {book.description}</h2>
        <h2>Price: {book.price}</h2>
        <h2>Author: {book.author}</h2>
        <h2>Publisher: {book.publisher}</h2>
        <h2>Release Date: {moment(book.publicationDate).format('MMMM Do YYYY')}</h2>
      </div>
      <button onClick={handleNavigation}>Go to HomePage</button>
    </div>
  );
};

export default BookPage;
