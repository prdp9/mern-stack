import mongoose from "mongoose"
const MONGO_URI = process.env.MONGO_URI

console.log(process.env.MONGO_URI)

export const connectDB = async() => {
    try {
        mongoose.connect(MONGO_URI)
        console.log('MongoDB Connected')
    } catch (error) {
        console.log('Error connecting to DB',error)
    }
}
