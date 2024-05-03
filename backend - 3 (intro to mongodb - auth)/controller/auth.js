import User from "../models/User.js"
import bcrypt from 'bcrypt'

        // hashing password - one way encryption
        // password -> certain hashing alogrithm ->slat -> number 10 -> $sa234jklkjas879a8s7d9
        // validate -> password -> hashing -> $sa234jklkjas879a8s7d9 
        // encryption - two way reversible , decryption
        // accessToken,refresh Token
        // John -> 1234 -> John

export const register = async (req,res) => {

    const { name, email, password } = req.body
    
    try {

        const userExists= await User.findOne({ email: email})

        if(userExists) {
            res.status(400).json({
                message: 'User already exists!'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)

        const user  =  await User.create({
            name:name,
            email:email,
            password: hashedPassword
       })
  


        res.status(201).json({
        message: 'Register route works!',
        user
         })

    } catch (error) {
        console.log('Error registering user',error)
        res.status(500).json({
            message: "Failed to register user!"
        })
    }
   

    
}

export const login = async (req,res) => {
    const { email,password  } = req.body
    try {

        const user = await User.findOne({email:email})

        if(!user) {
            res.status(400).json({
                message: 'User does not exist!'
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        
        if(!isPasswordValid) {
            res.status(400).json({
                message: 'Invalid password!'
            })
        }

        res.status(200).json({
            message: 'Login successful!',
            // accessToken,encryption - id card - token -> encrypted jwt token -> emai, user_id: 1234
            // middleware, authGaurd
            accessToken: 'access token',
        })

    } catch (error) {
        console.log('error',error)
        res.status(500).json({
            message: 'Failed to login!'
        })
    }

  
}