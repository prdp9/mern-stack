import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	bookList: [
		{
			id: 0,
			title: 'Sherlock'
		},
		{
			id: 1,
			title: 'Hamlet'
		}
	]
}

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		addNewBook: (state, actions) => {
			const newBook = actions.payload
			state.bookList.push({
				id: state.bookList.length + 1,
				title: newBook
			})
		},
		updateBook: (state, actions) => {
			const bookId = actions.payload.bookId
			const newTitle = actions.payload.title

			console.log('bookId', bookId)
			console.log('newTitle', newTitle)
			console.log('newTitle', actions.payload)

			state.bookList = state.bookList.map((book) => {
				if (book.id === bookId) {
					return {
						id: book.id,
						title: newTitle
					}
				}
				return book
			})

		},
		deleteBook: (state, actions) => {
			const bookId = actions.payload
			state.bookList = state.bookList.filter(book => book.id !== bookId)
		}


	}
})


export const { addNewBook, deleteBook, updateBook } = bookSlice.actions

export default bookSlice.reducer