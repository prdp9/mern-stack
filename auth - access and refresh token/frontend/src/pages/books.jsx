import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBook from "../hooks/book";
import axios from "axios";
import useAxiosPrivate from "../hooks/axios-private";
import { apiClient } from "../api/axios";

const BooksPage = () => {

	const axiosPrivate  = useAxiosPrivate()

	const [books, setBooks] = useState([])

	async function fetchBooks() {
		try {
			const response = await apiClient.get("/books")
			console.log(response.data)
			setBooks(response.data)
		} catch (error) {
			console.log("error", error)
		}
	}
	async function fetchBooksAxios() {
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
			<h2 className="text-xl font-semibold">Books Page</h2>

			{books.length === 0 &&
				<p>No books available</p>
			}
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
