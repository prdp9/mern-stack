import express from 'express';

const app = express()

app.use(express.json())

// GET, POST, PUT | PATCH, DELETE

const PORT = 8080

let books = [
	{
		id: 1,
		title: 'Book 1',

	},
	{
		id: 2,
		title: 'Book 2',
	},
	{
		id: 3,
		title: 'Book 3',
	}
]

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hello World',
	})
})


app.get('/books', (req, res) => {
	res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
	const bookId = req.params.id
	const book = books.find(book => book.id === parseInt(bookId))
	res.status(200).json(book)
})

// REST API ENDPOINT
app.post('/books', (req, res) => {
	const body = req.body
	console.log(body.title)
	books.push({
		id: books.length + 1,
		title: body.title
	})
	res.status(200).json({
		message: "Book Added!"
	})
})

app.put('/books/:id', (req, res) => {
	const bookId = req.params.id
	const body = req.body

	books = books.map((book) => {
		if (book.id === parseInt(bookId)) {
			return {
				id: book.id,
				title: body.title
			}
		}
		return book
	})

	res.status(200).json({
		message: 'Book updated!'
	})
})
// API ENDPOINT
app.delete('/books/:id', (req, res) => {
	const bookId = req.params.id
	books = books.filter(book => book.id !== parseInt(bookId))

	res.status(200).json({
		message: 'Book Deleted'
	})

})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})