import bcrypt from 'bcrypt'
import { generateAccessToken,  } from "../helper/auth.js"
import User from "../models/User.js"

// hashing password - one way encryption
// password -> certain hashing alogrithm ->slat -> number 10 -> $sa234jklkjas879a8s7d9
// validate -> password -> hashing -> $sa234jklkjas879a8s7d9 
// encryption - two way reversible , decryption
// accessToken,refresh Token
// John -> 1234 -> John

export const register = async (req, res) => {

    const { name, email, password } = req.body

    try {

        const userExists = await User.findOne({ email: email })

        if (userExists) {
            res.status(400).json({
                message: 'User already exists!'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)

        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })


        res.status(201).json({
            message: 'User created!',
        })

    } catch (error) {
        console.log('Error registering user', error)
        res.status(500).json({
            message: "Failed to register user!"
        })
    }



}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {

        if (!email) {
            res.status(400).json({
                message: 'Email is required!'
            })
        }

        if (!password) {
            res.status(400).json({
                message: 'Password is required!'
            })
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            res.status(400).json({
                message: 'User does not exist!'
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            res.status(400).json({
                message: 'Invalid password!'
            })
        }


        // access token - protected or private resources - ID card
        // refresh token

        const accessToken = generateAccessToken(user)

        // localStorage //sessesionStorage key: value

        // domain
        // google.com - frontend
        // backend.com -backend - sameSite:none
        // https://google.com - secure - true
        // http://google.com - unsecure - false

        res.status(200).json({
            message: 'Login successful!',
            accessToken,
        })

    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            message: 'Failed to login!'
        })
    }


}


export const logout = async (req, res) => {
    res.clearCookie('jwt-refresh')
    res.status(200).json({ message: 'User logged out!' })
}