import jwt from 'jsonwebtoken'

export const generateAccessToken = (user) => {
  return  jwt.sign(
        {
        email: user.email,
        userId: user._id

        },
    process.env.JWT_ACCESS_TOKEN_SECRET, 
    {
        expiresIn: '1w' // set long duration for using access token only method
    }
)
}





