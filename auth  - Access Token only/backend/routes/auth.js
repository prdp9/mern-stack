
import express from 'express'
import { login, logout, register } from '../controller/auth.js'
import { authGuard } from '../middleware/auth.js'


const router = express.Router()

router.post('/register', register )
router.post('/login', login )

router.post('/logout', authGuard ,logout )

const authRoutes = router

export default authRoutes