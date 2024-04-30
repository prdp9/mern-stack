import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

let books = [
	{
		id: 1,
		title: 'Book 1'

	},
	{
		id: 2,
		title: 'Book 2'
	},
	{
		id: 3,
		title: 'Book 3'

	}
]


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'uploads')))
app.use(express.static(path.join(__dirname, 'views')))

app.use(express.json())

const PORT = 8080

// GET POST PUT PATCH DELETE

app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/public/login.html')
})


app.get('/', (req, res) => {
	console.log(__dirname + '/index.html')
	res.send('Hello World!')
})

app.get('/books', (req, res) => {
	res.status(200).json(books)
})

app.post('/books', (req, res) => {
	const body = req.body
	console.log(body)
	books.push({
		id: books.length + 1,
		title: body.title
	})
	res.status(201).json('Book Added!')
})

app.put('/books/:id', (req, res) => {
	const body = req.body
	const bookId = req.params.id

	books = books.map((book) => {
		if (book.id === parseInt(bookId)) {
			return {
				id: book.id,
				title: body.title
			}
		}
		return book
	})

	res.status(201).json('Book updated!')
})

app.delete('/books/:id', (req, res) => {
	const bookId = req.params.id
	books = books.filter(book => book.id !== parseInt(bookId))
	res.status(201).json('Book deleted!')
})

app.get('/books/:id', (req, res) => {
	const bookId = req.params.id
	const book = books.find(book => book.id === parseInt(bookId))
	console.log(bookId, book)
	res.status(201).json(book)
})

app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}`)
})
