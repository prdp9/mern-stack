import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/axios-private";
import Button from '../components/button'
import BookCard from "../components/books/card";

const BooksPage = () => {

	const axiosPrivate = useAxiosPrivate()

	const [books, setBooks] = useState([])

	const navigate = useNavigate()

	async function fetchBooks() {
		try {
			const response = await axiosPrivate.get("/books")
			console.log(response.data)
			setBooks(response.data)
		} catch (error) {
			console.log("error", error)
		}
	}


	useEffect(() => {
		fetchBooks()
	}, [])

	return (
		<div className="flex flex-col items-center ">

			<Link to="/books/add" className="mt-5">
				<Button >
					Add Book
				</Button>
			</Link>

			{books.length === 0 &&
				<p>No books available</p>
			}
			<div className="flex flex-row flex-wrap mt-5 gap-5">
				{books.map((book) => (
					<div 
					key={book._id}
						onClick={() => {
							navigate(`/books/${book._id}`)
						}}
					>
						<BookCard book={book}  fetchBooks={fetchBooks}/>
					</div>
				))}
			</div>
		</div>
	);
};

export default BooksPage;
