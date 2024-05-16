import express from 'express';
import { getBooks } from '../controller/book.js';
import { authGuard } from '../middleware/auth.js';

const router = express.Router()

router.get("/", authGuard ,getBooks)

const bookRoutes = router


export default bookRoutes