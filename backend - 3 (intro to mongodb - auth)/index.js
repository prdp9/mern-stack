import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js';

dotenv.config()

const app = express()

app.use(express.json())

const PORT = 8080

app.use('/auth', authRoutes)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
	console.log('value',process.env.MONGO_URI)
	connectDB()

})