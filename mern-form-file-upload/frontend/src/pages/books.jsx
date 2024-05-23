import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../hooks/axios-private";
import Button from '../components/button'

const BooksPage = () => {

	const axiosPrivate = useAxiosPrivate()

	const [books, setBooks] = useState([])

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
		<div className="flex flex-col items-center overflow-hidden">
			<h2 className="text-xl font-semibold">Books Page</h2>

			<Link to="/books/add">
				<Button >
					Add Book
				</Button>
			</Link>

			{books.length === 0 &&
				<p>No books available</p>
			}
			<div className="flex flex-row flex-wrap mt-5 gap-5">
				{books.map((book) => (
					<Link key={book.id} to={`/books/${book.id}`}>
						<div>

							<img src={`http://localhost:8080/${book.image}`} alt="book cover" 
							className="h-[200px] w-[200px] object-cover rounded-md"
							/>
							<h2 className="text-2xl font-bold">
								{book.title}
							</h2>
							<h2>
								{book.description}
							</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BooksPage;
