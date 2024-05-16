import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoutes from './routes/user.js';
import bookRoutes from './routes/book.js';

dotenv.config()

const app = express()

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}))

app.use(express.json())

app.use(cookieParser())

const PORT = 8080

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/books', bookRoutes)



app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
	connectDB()
})